'use strict';
let knex = require('knex')(require('./knexfile'));
let bookshelf = require('bookshelf')(knex);
module.exports = bookshelf