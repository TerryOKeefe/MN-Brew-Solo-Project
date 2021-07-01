const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET - all recipes from DB
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
        console.log('Error in Get all recipes router', error);
        // send 500 status
        res.sendStatus(500);
    })
}); // end GET - all recipes

// GET - recipe by ID
router.get('/:id', (req, res) => {
  
  // sql query to send to DB
  const query = `SELECT * FROM "recipes"
    WHERE "recipes".id = $1;`;
  
  pool.query(query, [req.params.id])
    .then( (result) => {
      // send results
      res.send(result.rows);
    })
    .catch( (error) => {
      // console log error
      console.log('Error in GET id router', error);
      // send back 500 status
      res.sendStatus(500);
    })
}); // end GET - recipe by ID

// POST
router.post('/', (req, res) => {

  // console log req.body
  console.log('New Recipe Added:', req.body);

  // sql query to send to DB
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
    // send created status
    res.sendStatus(201);
  })
  .catch( (error) => {
    // console log error
    console.log('Error in POST', error);
    // send 500 status
    res.sendStatus(500);
  })
}); // end POST

// DELETE
router.delete('/:id', (req, res) => {
  
  // console log id being deleted
  console.log('Deleted Recipe', req.params.id);
  // set req.params to variable
  const itemToDelete = req.params.id;

  // query text to send to sql
  const deleteQuery = `DELETE FROM "public"."recipes" WHERE "id"=$1;`;

  pool.query(deleteQuery, [itemToDelete])
    .then( (result) => {
      // console log to show id of target item
      console.log(`Deleted recipe with id ${itemToDelete}`);
      // send back an OK status
      res.sendStatus(200);
    })
    .catch( (error) => {
      // console log error
      console.log('Error in Delete Router', error);
      // send back a 500 status
      res.sendStatus(500);
    })
}); // end DELETE

// PUT
router.put('/:id', (req, res) => {
  const updateItem = req.params.id;
  const newValue = req.body.value
  const editQuery = `UPDATE "recipes" SET "name" = $1, "style" =$2, "intro" = $3, "original_gravity" =$4, 
  "ferment_time"= $5, "bottle_time" = $6, "malt_extract" =$7, "hops" = $8, "yeast"=$9, "priming_sugar"=$10, "brew_day"=$11, 
  "fermentation"=$12, "bottling"=$13, "conditioning"=$14, "image"=$15, "user_id"=$16 
  WHERE "recipes".id = $17 `;

  pool.query(editQuery, [
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
    req.user.id,
    req.body.id
  ])
  .then( (result) => {
    // send created status
    res.sendStatus(201);
  })
  .catch( (error) => {
    // console log error
    console.log('Error in PUT', error);
    // send 500 status
    res.sendStatus(500);
  })
})

module.exports = router;