import {verifyToken} from 'utils/tokens';

export default function requireLogin(cb) {
	return async function (ctx) {
		try {
			const token = ctx.req.session.token;

			if (!token) throw Error('no token found');

			const decoded = await verifyToken(token);

			if (cb) return cb(decoded, ctx);

			return {props: {}};
		}

		catch (err) {
			ctx.res.writeHead(307, {Location: '/login'})
			ctx.res.end();

			return {props: {}}
		}
	}
}
