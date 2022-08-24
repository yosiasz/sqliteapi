const express = require('express');
const router = express.Router();
const temps = require('../services/temps');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(temps.getTemperatures(req.query.page));
  } catch(err) {
    console.error(`Error while getting temps `, err.message);
    next(err);
  }
});

/* POST quote */
router.post('/', function(req, res, next) {
  try {
    res.json(temps.create(req.body));
  } catch(err) {
    console.error(`Error while adding temps `, err.message);
    next(err);
  }
});

module.exports = router;