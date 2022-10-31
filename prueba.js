"use strict";

const {config} = require("./services/config");
const sqlConnection = require("./db/sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.selectall("Silla");
        console.log(select.recordset);
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();