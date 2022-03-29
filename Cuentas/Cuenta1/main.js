var add = document.getElementById('add')
var search = document.getElementById('search')
var update = document.getElementById('update')
var delet = document.getElementById('delete')
var nom = document.getElementById('nombre')
var sald = document.getElementById('saldo')
var pass = document.getElementById('password')

var cuentas =[
    {nombre:'hiromi',saldo:200,password:'helloworld'},
    {nombre:"manuel", saldo:300,password:'holita'},
    {nombre:"jose",saldo:500,password:'Holichis'}]

function agregar(){
    getValores()
    cuentas.push({nombre:nom.value,saldo:parseFloat(sald.value),password:pass.value})
    console.log(cuentas)
}
function buscar(){
    getNombre()
    for(var i = 0;i<cuentas.length;i++){
        if(cuentas[i].nombre === nom.value){
            console.log('Encontrado')
            break
        }
    }
}
function actualizar(){
    getNombre()
    for(var i = 0;i<cuentas.length;i++){
        if(cuentas[i].nombre === nom.value){
            getValores()
            cuentas.splice(i,1,{nombre:nom.value,saldo:parseFloat(sald.value),password:pass.value})
        }
    }
    console.log(cuentas)
}
function eliminar(){
    getNombre()
    for(var i = 0;i<cuentas.length;i++){
        if(cuentas[i].nombre === nom.value){
            cuentas.splice(i,1)
            break
        }
    }
    console.log(cuentas)
}
function getValores(){
    nom.innerHTML = nom.value
    sald.innerHTML = sald.value
    pass.innerHTML = pass.value
}
function getNombre(){
    nom.innerHTML = nom.value
}
add.addEventListener('click',agregar)
search.addEventListener('click',buscar)
update.addEventListener('click',actualizar)
delet.addEventListener('click',eliminar)