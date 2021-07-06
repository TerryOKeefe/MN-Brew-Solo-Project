const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET - all supplies from Database
router.get('/', (req, res) => {
    // query text to send to database
    const query = `SELECT * FROM "supplies" ORDER BY "supplies".id ASC;`;

    pool.query(query)
        .then( (result) => {
            // send the results
            res.send(result.rows);
        })
        .catch( (error) => {
            // console log any errors
            console.log('Error in GET all supplies router', error);
            // send 500 status
            res.sendStatus(500);
        })
}); // end GET - all supplies

// export router
module.exports = router;