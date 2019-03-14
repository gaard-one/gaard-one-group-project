const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "product_type";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
        console.log('Result.rows: ', result.rows);
    }).catch((error) => {
        console.log('Something went wrong in GET product types', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/newproduct', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "product_type" ("product_name", "cost", "description")
                       VALUES ( $1, $2, $3 );`;
    const product = req.body;
    pool.query(queryText, [product.product_name, product.cost, product.description])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Something went wrong in POST new product', error);
        res.sendStatus(500);
    });
});

/**
 * UPDATE router template
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const product = req.body;
    const queryText = `UPDATE "product_type"
                       SET "product_name" = '${product.product_name}',
                           "cost" = '${product.cost}',
                           "description" = '${product.description}'
                       WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
    .then((update) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Something went wrong in PUT product type', error);
        res.sendStatus(500);
    });
});


/** 
 * DELETE router template
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('In router delete PT', req.params.id);
    
    const queryText = `DELETE FROM "product_type"
                       WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Something went wrong in DELETE product type', error);
        res.sendStatus(500);
    });
});

module.exports = router;