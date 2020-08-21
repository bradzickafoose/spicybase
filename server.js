require('dotenv').config()
const express = require('express');
const next = require('next');
// const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const Redis = require('ioredis');
const redis = new Redis({
	port: parseInt(process.env.REDIS_PORT, 10),
	host: process.env.REDIS_HOST,
	family: 4,
	password: process.env.REDIS_PASS,
	db: 0,
});
let RedisStore = require('connect-redis')(session);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const auth = require('./api/routers/auth');
const jobs = require('./api/routers/jobs');
const rates = require('./api/routers/rates');
const {authenticate} = require('./api/middleware/authenticate');

app.prepare().then(() => {
	const server = express()
		// .use(helmet())
		.use(
			session({
				store: new RedisStore({client: redis}),
				secret: 'keyboard sloth',
				resave: false,
				saveUninitialized: false,
				cookie: {
					secure: process.env.NODE_ENV === 'production',
					httpOnly: true
				}
			}),
		)
		.use(cors())
		.use(express.json())
		.use('/api', auth)
		.use('/api/jobs', authenticate, jobs)
		.use('/api/rates', rates);

	server.get('/a', (req, res) => {
		return app.render(req, res, '/a', req.query);
	});

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
