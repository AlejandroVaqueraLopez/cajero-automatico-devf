//"logged in" elements
var toggleTurn = false;
var principal = document.getElementById('principal');
var btnViewLog = document.getElementById('btnViewLogin');
var user = document.getElementById('userName');//username label when logged
var salir = document.getElementById('salir');
var btnCloseLogin = document.getElementById("btnCloseLogin");
var loginPopup = document.getElementById("loginPopup");
//Login elements
var iniciar = document.getElementById('startSesion');
var pass = document.getElementById('contra');
var boton = document.getElementById('log');
var area = document.getElementById('area');
var h3 = document.getElementById('cuenta_selec');
var a = [];
//Register window elements
var cerrar = document.getElementById('cerrar');
var registrar = document.getElementById('registrar');
var registro = document.getElementById('registro');
var cuenta = document.getElementById('caunt');
var password = document.getElementById('pass');
var abrir = document.getElementById('abrirReg');
//Deleting account elements
var admin = document.getElementById('admin');
var eliminar = document.getElementById('eliminar');
var cerrarA = document.getElementById('cerrarAdmin');
var si = document.getElementById('si');
var no = document.getElementById('no');
//Edith profile elements
var actualizar = document.getElementById('actualizar');
var cerrarActu = document.getElementById('cerrarActu');
var actualiza = document.getElementById('actualiza');
var updat = document.getElementById('update');
var cauntAct = document.getElementById('cauntAct');
var passAct = document.getElementById('passAct');
var temp;
var userLogged = 0;//logged user index in users array

//make menu invisible 
btnViewLog.style.display = "none";
principal.style.display = "none";

//View all users registered in the page
function verCuentas() {
    var userCaptions = ``;
    for (var i = 0; i < cuentas.length; i++){
        a[i] = document.createElement("h5");
        a[i].classList.add("userProfileLink");
        a[i].classList.add("d-flex");
        a[i].classList.add("justify-content-center");
        a[i].classList.add("cursorPointer");
        a[i].classList.add("mx-1");
        a[i].classList.add("my-1");
        a[i].classList.add("align-items-center");
        a[i].innerHTML = cuentas[i].nombre;
        a[i].value = cuentas[i].nombre;
        area.appendChild(a[i]);
    }
}
verCuentas();
//Login function
function iniciarsesion(){
    var estado = false;
    for (var ite = 0; ite < cuentas.length; ite++){
        if ((cuentas[ite].nombre === h3.value) && (cuentas[ite].password === pass.value)) {
            userName.innerHTML = cuentas[ite].nombre;
            userName.value = cuentas[ite].nombre;
            console.log('inicio correcto');
            estado = true;
            userLogged = ite;
            iniciar.style.display = "none";
            principal.style.display = "block";
            btnViewLog.style.display = "flex";
            break
        }
    }
    if (estado === false){
        alert('Los datos no coinciden. Asegurate de tener seleccionada una cuenta y de ingresar correctamente la contraseña');
        console.log('contraseña incorrecta');
        pass.value = '';
    } 
}
boton.addEventListener('click', iniciarsesion);
//See selected profile
function visualizarCuenta(){
    for (var i = 0; i < a.length; i++) {
        crear_evento(a[i]);
    }
}
function crear_evento(boton){
    boton.onclick = function(){
        h3.innerHTML = boton.value;
        h3.value = boton.value;
    }
}
visualizarCuenta();

//Open the register window
function abrirRegistro(){
    openPopupFn(registro);
}
abrir.addEventListener('click', abrirRegistro);
//Close the register window
function cerrarRegistro(){
    closePopupFn(registro);
}
cerrar.addEventListener('click', cerrarRegistro);
//Add account function
function addArr(){
    cuenta.innerHTML = cuenta.value;
    password.innerHTML = password.value;
    cuentas.push(
    { 
        nombre: cuenta.value, 
        saldo: parseFloat(0),
        password: password.value,
        balance:10,
        transactions:[
            {
                date:`${year}-${month}-${day}`,
                amount:10,
                action:"Ingreso"
            }
        ] 
    });
    //view last added profile
    var valor = cuentas.length - 1;
    a[valor] = document.createElement("h5");
    a[valor].classList.add("userProfileLink");
    a[valor].classList.add("d-flex");
    a[valor].classList.add("justify-content-center");
    a[valor].classList.add("cursorPointer");
    a[valor].classList.add("mx-1");
    a[valor].classList.add("my-1");
    a[valor].classList.add("align-items-center");
    a[valor].innerHTML = cuentas[valor].nombre;
    a[valor].value = cuentas[valor].nombre;
    area.appendChild(a[valor]);

    visualizarCuenta();
    cerrarRegistro();
}
registrar.addEventListener('click', addArr)
//Open delete account window
function mostrarElim() {
    (toggleTurn === true)
		? (cerrarEdicion(),
           openPopupFn(eliminar)
        ): console.error(new Error("close event error"));
}
admin.addEventListener('click', mostrarElim);
//Close delete account window
function cerrarElim() {
    closePopupFn(eliminar);
}
//Delete account
function eliminarCuenta() {
     for (var i = 0; i < cuentas.length; i++) {
         if (cuentas[i].nombre === userName.value) {
             area.removeChild(a[i])
             cuentas.splice(i, 1)
             a.splice(i,1)
             h3.innerHTML = ''
             pass.value = ''
             break
         }
     }
    cerrarElim();
     principal.style.display = "none";
     btnViewLog.style.display = "none";
     iniciar.style.display = "block";
}
//yes confirmation to delete account
si.addEventListener('click', eliminarCuenta);
//no confirmation to delete account
no.addEventListener('click', cerrarElim);
//Open edit profile window
function abrirEdicion(){
    (toggleTurn === true)
		? (closePopupFn(loginPopup),
            openPopupFn(actualizar)
        ): console.error(new Error("close event error"));
}
//Open profile window function
function abrirActualiza(){
    abrirEdicion();
    cauntAct.value = userName.value;
     for(var i = 0;i<cuentas.length;i++){
         if(cuentas[i].nombre === cauntAct.value){
             passAct.value = cuentas[i].password
             temp = i
         }
     }
 }
updat.addEventListener('click',abrirActualiza);
//Close edit profile window
function cerrarActualiza(){
    closePopupFn(actualizar);
}
cerrarActu.addEventListener('click',cerrarActualiza);
//Update profile function 
function actualizaCuenta(){
    var saldoTemp = cuentas[temp].saldo;
    var balanceTemp = cuentas[temp].balance;
    var transactionsTemp = cuentas[temp].transactions;
    cuentas.splice(temp,1,{nombre:cauntAct.value,saldo:saldoTemp,password:passAct.value,balance:balanceTemp,transactions:transactionsTemp});
    userName.innerHTML = cauntAct.value;
    userName.value = cauntAct.value;
    cerrarActualiza();
}
actualiza.addEventListener('click',actualizaCuenta);
//Close edit window
function cerrarEdicion(){
    (toggleTurn === true)
		? closePopupFn(loginPopup)
		: console.error(new Error("close event error"))
}
//Close session function
function cerrarSesion() {
    cerrarEdicion();
    principal.style.display = "none";
    btnViewLog.style.display = "none";
    iniciar.style.display = "block";
    for (var i = 0; i < cuentas.length; i++) {
        area.removeChild(a[i]);
    }
    verCuentas()
    visualizarCuenta()
    h3.innerHTML='';
    pass.value = '';
}
salir.addEventListener('click', cerrarSesion);
