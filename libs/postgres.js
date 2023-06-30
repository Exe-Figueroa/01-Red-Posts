const { Pool } = require('pg');

const pool =  new Pool({
  host: 'localhost',
  port: 5432,
  user: 'facu',
  password: 'facu123',
  database: 'my_posts_database'
});

module.exports = pool;

