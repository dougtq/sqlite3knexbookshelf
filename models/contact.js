'use strict';
let bookshelf = require('../bookshelf');
let Contact = bookshelf.Model.extend({
  tableName: 'contacts',
});
module.exports = Contact;