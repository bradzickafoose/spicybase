const router = require('express').Router();
const {Job, Category} = require('../../data/models');

router
	.post('/', createJob)
	.get('/categories', readCategories)
	.get('/', readJobs)
	.put('/:id', updateJob)
	.delete('/:id', deleteJob);

async function createJob(req, res) {

	const newJob = {
		created_by: req.decoded.id,
		updated_by: req.decoded.id,
		...req.body
	}


	const job = await Job.forge(newJob).save();

	res.status(201).json(job);
}

async function readJobs(req, res) {
	const user_id = req.decoded.id;
	const _jobs = await Job.forge().where({created_by: user_id}).fetchAll({withRelated: 'job_categories', require:false});
  const jobs = _jobs.serialize();

	res.status(200).json(jobs);
}

async function updateJob(req, res) {
	const job_id = parseInt(req.params.id);

	const updatedJob = {
		id: job_id,
		updated_by: req.decoded.id,
		...req.body
	}

	console.log(updatedJob);

	const job = await Job.forge(updatedJob).save();

	res.status(200).json(job);
}

function deleteJob(req, res) {

}

async function readCategories(req, res) {
	try {
		const categories = await Category.forge().fetchAll();
		res.status(200).json(categories);
	} catch (err) {
		console.log(err);
		res.status(500).json({problems: 'too many'});
	}
}

module.exports = router;
