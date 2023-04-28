let productos={
    nombre:String,
    precio:Number
}
let carrito=[];
function guardar(a,b){
    productos.nombre=a;
    productos.precio=b;
    carrito.push(productos);
    
    
   
}


$("#carr").on("click",function(){
    console.log("hola");
let lista="";
let total=0;
let i;
for (i=0;i<carrito.length;i++){
    console.log("ho");
    lista+="<li>"+carrito[i].nombre+"-"+ carrito[i].precio+"</li>";
    total+=carrito[i].precio;
}
console.log(lista);
$('#modal-body').append(lista);
$('#modal-body').append("<p>Total compra:"+total+"€"+"</p>");



})
$("#borrar").on("click",function(){
    console.log("asdfg");
    jQuery('.modal-body').empty();
    $("li").remove('#borrar');
    $("p").remove('#borrar');
})