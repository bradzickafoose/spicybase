const BaseModel = require('./BaseModel');
const db = require('../dbConfig');

exports.Organizations = new BaseModel(db, 'organizations');
exports.Users = new BaseModel(db, 'users');
exports.Permissions = new BaseModel(db, 'permissions');
exports.Roles = new BaseModel(db, 'roles');
