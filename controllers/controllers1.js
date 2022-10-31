const sql = require('mssql')
//const sqlConfig = require("../services/config")
const sqlConfig = {
  user: 'admin',
  password: 'admin123',
  database: 'Avion',
  server: 'DESKTOP-VCSB42S\\SQLEXPRESS',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query`select * from Silla`
  console.dir(result.recordset)
 } catch (err) {
    console.log("error", err)
 }
}