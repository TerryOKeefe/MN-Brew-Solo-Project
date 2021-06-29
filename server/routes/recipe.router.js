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

router.get('/:id', (req, res) => {
  const query = `SELECT * FROM "recipes"
    WHERE "recipes".id = $1;`;
  
  pool.query(query, [req.params.id])
    .then( (result) => {
      res.send(result.rows);
    })
    .catch( (error) => {
      res.sendStatus(500);
      console.log();
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log(req.body);

  const addQuery = `INSERT INTO "recipes" ("name", "style", "intro", "original_gravity", 
    "ferment_time", "bottle_time", "malt_extract", "hops", "yeast", "priming_sugar", "brew_day", 
    "fermentation", "bottling", "conditioning", "image", "user_id")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`;

  pool.query(addQuery, [
    req.body.name, 
    req.body.style, 
    req.body.intro, 
    req.body.original_gravity, 
    req.body.ferment_time, 
    req.body.bottle_time, 
    req.body.malt_extract, 
    req.body.hops, 
    req.body.yeast, 
    req.body.priming_sugar, 
    req.body.brew_day, 
    req.body.fermentation, 
    req.body.bottling, 
    req.body.conditioning, 
    req.body.image, 
    req.user.id])
  .then( (result) => {
    res.sendStatus(201);
  })
  .catch( (error) => {
    console.log('Error in POST', error);
    res.sendStatus(500);
  })
});

module.exports = router;