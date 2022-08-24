const db = require('./db');
const config = require('../config');

function getTemperatures(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT data FROM Database LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getTemperatures
}