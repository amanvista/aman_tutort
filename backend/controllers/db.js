const res = require("express/lib/response");
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "tutort",
  password: "admin",
  port: 5432,
});


let showDBResults = async (db,query)=>{
  await client.connect()
  const res = await client.query(query)
  // console.log(res.rows[0].message) // Hello world!
  await client.end()
  return res
}

module.exports = showDBResults
// showDBResults('tutort',"select * from \"courseConfig\"" ).then((results)=>console.log("DONE"+results.rows[0].message))
// client.connect()
// .then(() => console.log("Connected successfuly"))
// .then(() => client.query("select * from \"courseConfig\""))
// .then(results => console.table(results.rows[0]))
// .catch(e => console.log(e))
// .finally(() => client.end())