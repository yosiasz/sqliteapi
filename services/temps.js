const db = require('./db');
const config = require('../config');

function getTemperatures() {
  const payload = db.query(`SELECT data FROM Database LIMIT ?`, [config.listPerPage]);
  return payload;
}

module.exports = {
    getTemperatures
}