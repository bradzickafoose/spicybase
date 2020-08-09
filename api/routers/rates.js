const router = require('express').Router();
const { rate_types } = require('./data.json');

router
  .get('/types', getRateTypes);

function getRateTypes(req, res) {
  res.status(200).json(rate_types)
}

module.exports = router;