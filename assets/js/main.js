let boton = document.getElementById("boton")

class Usuario {
    constructor(nombre, apellido, correo, telefono, nota){
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
    this.telefono = telefono
    this.nota = nota
}
}

function obtenerDatos(){
    let usuario = new Usuario(nombre.value, apellido.value, correo.value, telefono.value, nota.value)
    mostrarDatos(usuario) 
}

function mostrarDatos(...usuario){
    
    let {nombre, apellido, correo, telefono} = usuario[0]
    let nombreCompleto = `${nombre} ${apellido}`
    here.innerText = `Nombre: ${nombreCompleto} Email: ${correo} ${telefono}`
}

boton.addEventListener("click", obtenerDatos)