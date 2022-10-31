"use strict";

const mssql = require('mssql');

module.exports = class Sql {
    constructor(stringConnection) {
        this.stringConnection = stringConnection;
    }

    connect() {
        mssql.on('error', err => {
            console.log(err);
            mssql.close();
        });

        return mssql.connect(this.stringConnection);
    }

    close() {
        return mssql.close();
    }

    async selectall(table) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`select * from ${table}`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }


    async selectid(table, id) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`select * from ${table} where id_silla = '${id}'`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async selectbuy(id) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`select * from Tiquete where id_compra = '${id}'`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async Add_buy(id_compra, id_usuario, nombre, cantidad) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE INSERT INTO Compra(id_compra,id_usuario,nombre,cantidad,fecha)
                values ('${id_compra}', '${id_usuario}', '${nombre}', '${cantidad}', CURRENT_TIMESTAMP)`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async Delete_buy(id_compra) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(`DELETE FROM Compra WHERE id_compra ='${id_compra}';`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async Add_ticket(id_tiquete, id_compra, id_silla) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(
                    `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE 
                    INSERT INTO Tiquete(id_tiquete,id_compra,id_silla)
                        values ('${id_tiquete}', '${id_compra}', '${id_silla}')
                    UPDATE Silla SET estado= 'Comprada' where id_silla = '${id_silla}'`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async Delete_ticket(id_compra, id_silla) {
        return new Promise((resolve, reject) => {
            this.connect().then(pool => {
                return pool.request().query(
                    `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE 
                    DELETE from Tiquete WHERE id_compra = '${id_compra}'
                    UPDATE Silla SET estado = null where id_silla = '${id_silla}'`);
            }).then(result => {
                mssql.close();
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

}
