const res = require("express/lib/response");
const { Client } = require("pg");

let clientInfo = {
  user: "postgres",
  host: "localhost",
  database: "tutort",
  password: "admin",
  port: 5432,
};

let showDBResults = async (db,query)=>{
  const client = new Client(clientInfo);
  await client.connect()
  const res = await client.query(query)
  await client.end()
  return res
}

module.exports = showDBResults