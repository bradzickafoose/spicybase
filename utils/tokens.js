import {verify} from 'jsonwebtoken';

export function verifyToken(token) {
	const jwtSecret =
		process.env.JWT_SECRET ||
		'add a .env file to root of project with the JWT_SECRET variable.';

	return new Promise((resolve, reject) => {
		return verify(token, jwtSecret, (err, decoded) => {
			if (err) {
				reject(err);
			} else {
				resolve(decoded);
			}
		});
	});
}

