const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "tutort",
  password: "admin",
  port: 5432,
});



client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from \"courseConfig\""))
.then(results => console.table(results.rows[0]))
.catch(e => console.log(e))
.finally(() => client.end())