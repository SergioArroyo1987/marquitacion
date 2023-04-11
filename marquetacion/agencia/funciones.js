let nombre=document.getElementById("nombre");
let origen=document.getElementById("origen");
let destino=document.getElementById("destino");
let personas=document.getElementById("numero_personas");
let fecha=document.getElementById("fecha");
let datos=[];
mostrar=() =>{
let recogida={
    nombre:nombre.value,
    origen:origen.value,
    destino:destino.value,
    personas:personas.value,
    fecha:fecha.value
}
datos.push(recogida);
console.log(datos);
}
function filtrado(){
    let datos2=[];
    for(a=0;a<datos.length;a++){
        datos[a].destino=datos[a].destino.toLowerCase();
        if(datos[a].destino=="canarias"||datos[a].destino=="mallorca"||datos[a].destino=="galicia"){
            console.log(datos[a]);
            datos2.push(datos[a]);
        }
    }
    let tabla=document.getElementById("mostrar");
    let borrar=document.querySelector(".nulo1");
    tabla.innerHTML =
    `
    <tr class="asd">
    <th>nombre</th>
    <th>origen</th>
    <th>destino</th>
    <th>personas</th>
    <th>fecha</th>
    </tr>
    `
    for(a=0;a<datos2.length;a++){
        tabla.innerHTML+=
        `
        <tr>
        <th class="fila">${datos2[a].nombre}</th>
        <th class="fila" >${datos2[a].origen}</th>
        <th class="fila">${datos2[a].destino}</th>
        <th class="fila">${datos2[a].personas}</th>
        <th class="fila">${datos2[a].fecha}</th>

        </tr>
        `
    }

}