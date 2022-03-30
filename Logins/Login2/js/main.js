//Elementos del login
var pass = document.getElementById('contra')
var boton = document.getElementById('log')
var area = document.getElementById('area')
var h3 = document.getElementById('cuenta_selec')
var a = []
//Elementos de la ventana de registro
var cerrar = document.getElementById('cerrar')
var registrar = document.getElementById('registrar')
var registro = document.getElementById('registro')
var cuenta = document.getElementById('caunt')
var password = document.getElementById('pass')
var abrir = document.getElementById('abrirReg')
//Elementos de eliminacion
var admin = document.getElementById('admin')
var administrar = document.getElementById('administrar')
var cerrarA = document.getElementById('cerrarAdmin')
var heliminar = document.getElementById('cuenta_eliminar')
var si = document.getElementById('si')
var no = document.getElementById('no')
//Listado de las cuentas
var cuentas = [
    { nombre: 'hiromi', saldo: 200, password: 'helloworld' },
    { nombre: "manuel", saldo: 300, password: '12345' },
    { nombre: "jose", saldo: 500, password: 'hola' }]
//Ver las cuentas en la pagina
function verCuentas() {
    for (var i = 0; i < cuentas.length; i++) {
        a[i] = document.createElement("a")
        a[i].innerHTML = cuentas[i].nombre
        a[i].value = cuentas[i].nombre
        area.appendChild(a[i])
    }
}
verCuentas()
//funcion para iniciar la sesion
function iniciarsesion() {
    var estado = false
    for (var ite = 0; ite < cuentas.length; ite++) {
        if ((cuentas[ite].nombre === h3.value) && (cuentas[ite].password === pass.value)) {
            window.location = "../../cajero-automatico-devf/cajeroAutomatico/popup/popups.html"
            console.log('inicio correcto')
            estado = true
            break
        }
    }
    if (estado === false) {
        alert('Los datos no coinciden')
        console.log('contraseña incorrecta')
        pass.value = ''
    } else if (estado === true) {

    }
}
boton.addEventListener('click', iniciarsesion)
//Proporciona a los elementos en la pagina la funcion de ver que cuenta se selecciona
function visualizarCuenta() {
    for (var i = 0; i < a.length; i++) {
        crear_evento(a[i]);
    }
}
function crear_evento(boton) {
    boton.onclick = function () {
        h3.innerHTML = boton.value
        h3.value = boton.value
    }
}
visualizarCuenta()
//abre una ventanita de registro
function abrirRegistro() {
    registro.classList.remove("modal-container")
}
abrir.addEventListener('click', abrirRegistro)
//Cierra la ventana del registro
function cerrarRegistro() {
    registro.classList.add("modal-container")
}
cerrar.addEventListener('click', cerrarRegistro)
//funcion para agragar una cuenta
function addArr() {
    cuenta.innerHTML = cuenta.value
    password.innerHTML = password.value
    cuentas.push({ nombre: cuenta.value, saldo: parseFloat(0), password: password.value })
    //Poniendo la ultima cuenta para verla
    var valor = cuentas.length - 1
    a[valor] = document.createElement("a")
    a[valor].innerHTML = cuentas[valor].nombre
    a[valor].value = cuentas[valor].nombre
    area.appendChild(a[valor])
    visualizarCuenta()
    cerrarRegistro()
}
registrar.addEventListener('click', addArr)
//Abrir la ventana para eliminar las cuentas
function mostrarElim() {
    administrar.classList.remove("modal-container")
    heliminar.innerHTML = h3.value
    heliminar.value = h3.value
}
admin.addEventListener('click', mostrarElim)
//Cerrar la ventan para eliminar cuentas
function cerrarElim() {
    administrar.classList.add("modal-container")
}
cerrarA.addEventListener('click', cerrarElim)
//Eliminar cuenta
function eliminarCuenta() {
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === heliminar.value) {
            area.removeChild(a[i])
            cuentas.splice(i, 1)
            a.splice(i,1)
            break
        }
    }
    cerrarElim()
}
si.addEventListener('click', eliminarCuenta)
//no elimina la cuenta
no.addEventListener('click', cerrarElim)  