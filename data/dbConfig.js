const config = require('../knexfile');
const environment = process.env.DB_ENV;
const knex = require('knex')(config[environment]);
const bookshelf = require('bookshelf');

module.exports = bookshelf(knex);
