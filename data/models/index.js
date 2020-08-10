const bookshelf = require('../dbConfig');

const Role = bookshelf.model('Role', {
	tableName: 'roles',
})

const User = bookshelf.model('User', {
	tableName: 'users',
	jobs() {
		return this.belongsToMany('Job')
	}
})

const Category = bookshelf.model('Category', {
	tableName: 'job_categories',
})

const Job = bookshelf.model('Job', {
	tableName: 'jobs',
	hasTimestamps: true,
	users() {
		return this.belongsToMany('User')
	},
	job_categories() {
		return this.belongsTo('Category');
	}
})

module.exports = {
	Role,
	User,
	Category,
	Job
}
