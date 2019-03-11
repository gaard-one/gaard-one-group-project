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
        console.log('Error in completed /printed PUT query', error);
        res.sendStatus(500);
    });
})
// end PUT route for product printed
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