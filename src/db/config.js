const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

module.exports = () => sqlite.open({
  filename: './src/db/rocketq.sqlite',
  driver: sqlite3.Database,
})