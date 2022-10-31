"use strict";

const {config} = require("../services/config");
const sqlConnection = require("../db/sql");
const sql = new sqlConnection(config.connectionSQL);


const select = async () => {
    let select = await sql.selectall("Silla")
    return select.recordset
}

const selectid = async () => {
    let select = await sql.selectid("Silla","1A")
    console.log(select.recordset)
    return select.recordset
}

const selectbuy = async (id) => {
    let select = await sql.selectbuy(id)
    return select.recordset
}

const Add_buy = async (id_compra,id_usuario,nombre,cantidad) => {
    let add_buy = await sql.Add_buy(id_compra,id_usuario,nombre,cantidad)
    return select.recordset
}

const Delete_buy = async (id_compra) => {
    let add_buy = await sql.Delete_buy(id_compra)
    return select.recordset
}

const Add_ticket = async (id_tiquete,id_compra,id_silla) => {
    let add_buy = await sql.Add_ticket(id_tiquete,id_compra,id_silla)
    return select.recordset
}

const Delete_ticket = async (id_compra,id_silla) => {
    let add_buy = await sql.Delete_ticket(id_compra,id_silla)
    return select.recordset
}
module.exports = {select, Add_buy,selectid, Add_ticket, Delete_ticket, Delete_buy, selectbuy}