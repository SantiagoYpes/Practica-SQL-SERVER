let seats = []

let selectseats = []

fetch('http://localhost:3000/select')
.then(x=> x.json()
)
.then(x=> {
    x.forEach(function (silla) {
        document.getElementById(silla.id_silla).disabled = true
    })
})

let btnConfirm = document.getElementById("btn_Confirm")
btnConfirm.addEventListener("click", start, false)

let btnDelete = document.getElementById("btn_Delete")
btnDelete.addEventListener("click", Delete, false)

function Delete() {
    let id_factura = document.getElementById("id_compra").value
    let transaction = { id: id_factura}
    alert(id_factura)
    let transactionJson = JSON.stringify(transaction)
    fetch('http://localhost:3000/delete', {
            body: transactionJson,
            method: 'Delete'
        }).then(x => {
            alert("Compra Eliminada Correctamente")
            window.open('index.html','_top');
        })
}

function start() {
    let s1A = document.getElementById("1A").checked
    let s1B = document.getElementById("1B").checked
    let s1E = document.getElementById("1E").checked
    let s1F = document.getElementById("1F").checked
    let s2A = document.getElementById("2A").checked
    let s2B = document.getElementById("2B").checked
    let s2E = document.getElementById("2E").checked
    let s2F = document.getElementById("2F").checked

    let s3A = document.getElementById("3A").checked
    let s3B = document.getElementById("3B").checked
    let s3E = document.getElementById("3E").checked
    let s3F = document.getElementById("3F").checked
    let s4A = document.getElementById("4A").checked
    let s4B = document.getElementById("4B").checked
    let s4E = document.getElementById("4E").checked
    let s4F = document.getElementById("4F").checked

    let s5A = document.getElementById("5A").checked
    let s5B = document.getElementById("5B").checked
    let s5C = document.getElementById("5C").checked
    let s5D = document.getElementById("5D").checked
    let s5E = document.getElementById("5E").checked
    let s5F = document.getElementById("5F").checked
    let s6A = document.getElementById("6A").checked
    let s6B = document.getElementById("6B").checked
    let s6C = document.getElementById("6C").checked
    let s6D = document.getElementById("6D").checked
    let s6E = document.getElementById("6E").checked
    let s6F = document.getElementById("6F").checked

    let s7A = document.getElementById("7A").checked
    let s7B = document.getElementById("7B").checked
    let s7C = document.getElementById("7C").checked
    let s7D = document.getElementById("7D").checked
    let s7E = document.getElementById("7E").checked
    let s7F = document.getElementById("7F").checked
    let s8A = document.getElementById("8A").checked
    let s8B = document.getElementById("8B").checked
    let s8C = document.getElementById("8C").checked
    let s8D = document.getElementById("8D").checked
    let s8E = document.getElementById("8E").checked
    let s8F = document.getElementById("8F").checked

    let s9A = document.getElementById("9A").checked
    let s9B = document.getElementById("9B").checked
    let s9C = document.getElementById("9C").checked
    let s9D = document.getElementById("9D").checked
    let s9E = document.getElementById("9E").checked
    let s9F = document.getElementById("9F").checked
    let s10A = document.getElementById("10A").checked
    let s10B = document.getElementById("10B").checked
    let s10C = document.getElementById("10C").checked
    let s10D = document.getElementById("10D").checked
    let s10E = document.getElementById("10E").checked
    let s10F = document.getElementById("10F").checked

    let s11A = document.getElementById("11A").checked
    let s11B = document.getElementById("11B").checked
    let s11C = document.getElementById("11C").checked
    let s11D = document.getElementById("11D").checked
    let s11E = document.getElementById("11E").checked
    let s11F = document.getElementById("11F").checked

    seats.push(
        { id: "1A", state: s1A },
        { id: "1B", state: s1B },
        { id: "1E", state: s1E },
        { id: "1F", state: s1F },

        { id: "2A", state: s2A },
        { id: "2B", state: s2B },
        { id: "2E", state: s2E },
        { id: "2F", state: s2F },

        { id: "4A", state: s4A },
        { id: "4B", state: s4B },
        { id: "4E", state: s4E },
        { id: "4F", state: s4F },

        { id: "3A", state: s3A },
        { id: "3B", state: s3B },
        { id: "3E", state: s3E },
        { id: "3F", state: s3F },

        { id: "5A", state: s5A },
        { id: "5B", state: s5B },
        { id: "5C", state: s5C },
        { id: "5D", state: s5D },
        { id: "5E", state: s5E },
        { id: "5F", state: s5F },

        { id: "6A", state: s6A },
        { id: "6B", state: s6B },
        { id: "6C", state: s6C },
        { id: "6D", state: s6D },
        { id: "6E", state: s6E },
        { id: "6F", state: s6F },

        { id: "7A", state: s7A },
        { id: "7B", state: s7B },
        { id: "7C", state: s7C },
        { id: "7D", state: s7D },
        { id: "7E", state: s7E },
        { id: "7F", state: s7F },

        { id: "8A", state: s8A },
        { id: "8B", state: s8B },
        { id: "8C", state: s8C },
        { id: "8D", state: s8D },
        { id: "8E", state: s8E },
        { id: "8F", state: s8F },

        { id: "9A", state: s9A },
        { id: "9B", state: s9B },
        { id: "9C", state: s9C },
        { id: "9D", state: s9D },
        { id: "9E", state: s9E },
        { id: "9F", state: s9F },

        { id: "10A", state: s10A },
        { id: "10B", state: s10B },
        { id: "10C", state: s10C },
        { id: "10D", state: s10D },
        { id: "10E", state: s10E },
        { id: "10F", state: s10F },

        { id: "11A", state: s11A },
        { id: "11B", state: s11B },
        { id: "11C", state: s11C },
        { id: "11D", state: s11D },
        { id: "11E", state: s11E },
        { id: "11F", state: s11F }
    )

    let id = document.getElementById("id").value
    let user = document.getElementById("user").value
    seats.forEach(function (seat) {
        if (seat.state == true) {
            selectseats.push(seat.id)
        }
    })
    if (selectseats.length == 0) {
        alert("Elige Sillas para tu Compra")
    }
    if (selectseats.length > 3) {
        alert("El Número Máximo de Sillas son 3")
        window.open('index.html','_top');
    } else {
        let transaction = { id: id, user: user, select: selectseats }
        let transactionJson = JSON.stringify(transaction)

        fetch('http://localhost:3000/insertinto', {
            body: transactionJson,
            method: 'Post'
        }).then(x => x.json()).then(x =>{
            alert("Compra realizada con id: "+x.id_compra)
            window.open('index.html', '_top')
        })
    }
/*
    then(x =>{
        alert("Compra realizada")
        window.open('index.html', '_top')
    })*/

}



