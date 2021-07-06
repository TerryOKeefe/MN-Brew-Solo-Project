const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET - all created brew

// POST - new created brew
router.post('/', (req, res) => {
    // sql query to send to DB
    const query = `INSERT INTO "created_brew" ("name", "style", "notes", "date", "user_id")
    VALUES($1, $2, $3, $4, $5);`;

    pool.query(query, [req.body.name, req.body.style, req.body.notes, req.body.date, req.user.id])
        .then( (result) => {
            // send created status
            res.sendStatus(201);
        })
        .catch( (error) => {
            // send 500 status
            res.sendStatus(500);
        })
}); // end POST

module.exports = router;