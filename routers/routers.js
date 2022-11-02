const express = require('express') // Importar la libreria de express
const app = express.Router()
const controlador = require("../controllers/controllers")

const path = require("path")

app.get('/select', (req, res) => {
    controlador.select().then(respuesta_controlador => {
        let sillas = []
        respuesta_controlador.forEach(function (silla) {
            if (silla.estado == "Comprada") {
                sillas.push(silla)
            }
        });
        let sillasJson = JSON.stringify(sillas)
        res.send(sillasJson)
    }).catch(error => {
        console.log("error", error);
        res.send(error)
    })
})

app.delete('/delete', (req, res) => {

    let id_compra = req.body.id
    controlador.selectbuy(id_compra).then(respuesta_controlador => {
        respuesta_controlador.forEach(function (respuesta) {
            controlador.Delete_ticket(id_compra, respuesta.id_silla).then(respuesta_controlador => {
                //res.send(respuesta_controlador)
            })
        })
        controlador.Delete_buy(id_compra).then(respuesta_controlador => {
            //res.send(respuesta_controlador)
        }).catch(error => {
            console.log("error", error);
            //res.send(error)
        })
        res.send(respuesta_controlador)
    }).catch(error => {
        console.log("error", error);
        res.send(error)
    })

})

app.post('/insertinto', (req, res) => {
    let select = req.body.select
    let id_user = req.body.id
    let name = req.body.user
    let quantity = select.length
    let id_compra = ("FA" + random())
    let response = { id_compra: ("id Compra: "+id_compra) }
    let responseJson = JSON.stringify(response)
    let sillas = []
    controlador.select().then(respuesta_controlador => {
        respuesta_controlador.forEach(function (silla) {
            if (silla.estado == "Comprada") {
                sillas.push(silla.id_silla)
            }
        })
        let con = verificar(select, sillas)
        if (con == 0) {
            controlador.Add_buy(id_compra, id_user, name, quantity).then(respuesta_controlador => {
                for (let i = 0; i < quantity; i++) {
                    let id_tiquete = ("TI" + random())
                    controlador.Add_ticket(id_tiquete, id_compra, select[i]).then(respuesta_controlador => {

                    })
                }
                res.send(responseJson)
            }).catch(error => {
                console.log("error", error);
            })

        } else {
            let response = { id_compra: "Compra Fallida" }
            let responseJson = JSON.stringify(response)
            res.send(responseJson)
        }

    })




})

function verificar(sillas, sillasres) {
    let validacion = 0
    sillas.forEach(function (silla) {
        sillasres.forEach(function (silla1) {
            if (silla == silla1) {
                validacion = 1
            }
        })
    })
    return validacion
}
function random() {
    return Math.floor((Math.random() * (99999 - 10000 + 1)) + 10000);
}

module.exports = app