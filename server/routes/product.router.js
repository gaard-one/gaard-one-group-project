const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
//Takes in body with .quantity and .productTypeId and productTypeCost
router.post('/', (req, res) => {
    (async () => {//wraps around everything we want to 'await'

        console.log('req.body is ', req.body);

        const quantity = parseInt(req.body.quantity);
        const productTypeId = parseInt(req.body.productTypeId);
        const productTypeCost = parseInt(req.body.productTypeCost);

        //opens a connection until it's closed later
        const client = await pool.connect();

        try{
            //SQL thing, tells where to ROLLBACK to
            await client.query('BEGIN');

            // runs code for product quantity number of times
            for(i = 0; i < quantity; i++){
                //create the product entry
                let queryText = `INSERT INTO "product" ("product_type_id")
                                 VALUES ($1)
                                 RETURNING id;`;
                let prod_id = await client.query(queryText, 
                                                 [productTypeId]);
                prod_id = prod_id.rows[0].id;
                console.log('this should be an integer',prod_id);

                //create the plot entry
                queryText = `INSERT INTO "plot" ("product_id")
                             VALUES ($1)
                             RETURNING id;`;
                let plot_id = await client.query(queryText, 
                                    [prod_id]);
                plot_id = plot_id.rows[0].id;
                console.log('this should be an integer',plot_id);

                //Select the next unused square
                queryText = `SELECT * FROM "unit_squares"
                             WHERE "plot_id" IS NULL
                             ORDER BY id ASC LIMIT 1;`;
                let squareResult = await client.query(queryText);
                //base unit is the square we start from, it has
                //a latitude and longitude to measure distance from
                let baseUnit = squareResult.rows[0];
                //base unit will be in the plot
                queryText = `UPDATE "unit_squares" 
                             SET "plot_id" = $1
                             WHERE id = $2;`;
                await client.query(queryText, [plot_id, baseUnit.id]);


                //add the rest of the unit squares based on their 
                //distance from the original (baseUnit)
                //j starts at 1 because 0 corresponds to base unit
                for(let j = 1; j < productTypeCost; j++){
                    //find Next closet square
                    queryText =  `SELECT *
                                FROM unit_squares
                                WHERE geo_distance($1,bl_corner_lon,$2,bl_corner_lat) = 
                                (SELECT min(geo_distance($1,bl_corner_lon,$2,bl_corner_lat)) 
                                    FROM unit_squares 
                                    WHERE plot_id IS NULL);`;
                    let nextSquare = await client.query(queryText, 
                                                        [baseUnit.bl_corner_lon,
                                                         baseUnit.bl_corner_lat]);
                    //update square to be in the plot
                    queryText = `UPDATE "unit_squares" 
                                SET "plot_id" = $1
                                WHERE id = $2;`;
                    await client.query(queryText, [plot_id, nextSquare.rows[0].id]);
                }//end for loop with j
                console.log('exit j for loop');    

            }//end for loop with i
            console.log('exit i for loop');
            
            //once you hit this you can't ROLLBACK
            await client.query('COMMIT');
            res.sendStatus(201);
        }catch (error) {
            console.log('Rollback', error);
            await client.query('ROLLBACK');
            throw error;
        }finally {
            client.release();
        }
    })().catch((error) => {
        console.log('CATCH', error);
        res.sendStatus(500);
    });
});//end router post

module.exports = router;