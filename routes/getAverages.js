var express = require('express');
var router = express.Router();
let { dbQuery } = require("../lib/db-query");

let results = {};

async function getData() {
  let query = 'SELECT name, AVG(HOURS) FROM courses GROUP BY name';

  return await dbQuery(query).then(res => res.rows.forEach(row => {
    results[row.name] = Math.round(row.avg);
  }))
}

getData();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(results));
});

module.exports = router;
