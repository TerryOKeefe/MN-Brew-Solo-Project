const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // query text to send to database
  const query = `SELECT * FROM "recipes" ORDER BY "id" ASC;`;
  pool.query(query)
    .then( (result) => {
        // send the results
        res.send(result.rows);
    })
    .catch( (error) => {
        // console log any errors
        console.log('Error in Get all recipes', error);
        // send 500 status
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;