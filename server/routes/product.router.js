const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// PUT route for product printed
router.put('/printed/:id', (req, res)=>{
    console.log('in put route req.body', req.body);
    // const product = req.body;
    const queryText = `UPDATE "product" SET "printed" = true WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((responseFromDatabase)=>{
        console.log('in /printed PUT route', responseFromDatabase);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in /printed PUT query', error);
        res.sendStatus(500);
    });
})
// end PUT route for product printed

// PUT route for product claimed
router.put('/claimed/:id', (req, res)=>{
    console.log('in put route req.body', req.body);
    const queryText = `UPDATE "product" SET "claimed" = true WHERE "id" =$1;`;
    pool.query(queryText, [req.params.id])
    .then((responseFromDatabase)=>{
        console.log('in /claimed PUT route', responseFromDatabase);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in /claimed PUT query', error);
    });
})
// end PUT route for product claimed
/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;