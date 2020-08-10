const router = require('express').Router();
const {User} = require('../../data/models');
const {compareSync, hashSync} = require('bcrypt');
const {generateToken, validateBody} = require('../middleware/authenticate');

router
	.post('/register', validateBody, register)
	.post('/login', login);

async function register(req, res) {
	let user = req.body;
	const hash = hashSync(user.password, 12);
	user.password = hash;

	try {
		const _user = await Users.forge(user).save();
		user = _user.serialize();

		res.status(201).json({
			message: 'User added successfully',
			user
		});

	} catch (error) {
		res.status(500).json({
			message: 'Check register function in auth.js',
			error: `${error}`
		})
	}
}

async function login(req, res) {
	let {email, password} = req.body;
	const _user = await User.forge().where({email}).fetch();
	const user = _user.serialize();

	try {
		if (user && compareSync(password, user.password)) {
			const token = generateToken(user);
			res.status(200).json({
				message: `Welcome, ${user.first_name}!`,
				token,
				user,
			});
		} else {
			console.log(password);
			res.status(401).json({
				message: 'Check username and password and try again',
			});
		}
	} catch (error) {
		res.status(401).json({
			message: 'Check username and password and try again',
		});
	}
}

module.exports = router;
