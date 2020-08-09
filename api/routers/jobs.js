const router = require('express').Router();
const { Jobs } = require('../../data/models');

router
  .post('/:id', createJob)
  .get('/:id', readJob)
  .put('/:id', updateJob)
  .delete('/:id', deleteJob);

function createJob(req, res) {

}

function readJob(req, res) {

}

function updateJob(req, res) {

}

function deleteJob(req, res) {

}

module.exports = router;