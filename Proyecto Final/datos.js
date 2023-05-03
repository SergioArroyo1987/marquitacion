class movie{
  title;
  releaseyear;
  actors=[];
nacionality;
director;
writer;
language;
plataforma;
isMCU;
mainCharacterName;
producer;
distributor;
genre;
photo;
constructor(title,releaseyear,nacionality,genre,photo){
  this.title=title;
  this.releaseyear=releaseyear;
  this.nacionality=nacionality;
  this.genre=genre;
  this.photo=photo;
  
}}
class profesional{
  name;
  age;
  welght;
  height;
  isretired;
  nationality;
  oscarnumbers;
  profession;
  constructor(name,age,welght,height,isretired,nationality,oscarnumbers,profession,photo){
      this.name=name;
      this.age=age;
      this.welght=welght;
      this.height=height;
      this.isretired=isretired;
      this.nationality=nationality;
      this.oscarnumbers=oscarnumbers;
      this.profession=profession;
      this.photo=photo;
  }}






let dumbo=new movie("Dumbo",5,"Inglatera","Infatil","/dumbo.jpg");
let piratas=new movie("Piratas del caribe",8,"Estados Unidos","Accion","/piratas.jpg");
let malefica=new movie("Malefica",8,"Francia","Terror","/malefique.jpg");
let malefica1=new movie("Malefica",8,"Francia","Terror","/malefique.jpg");
let malefica2=new movie("Malefica",8,"Francia","Terror","/malefique.jpg");
let piratas1=new movie("Piratas del caribe",8,"Estados Unidos","Accion","/piratas.jpg");
let piratas2=new movie("Piratas del caribe",8,"Estados Unidos","Accion","/piratas.jpg");
let grupo=[dumbo,piratas,malefica,malefica1,malefica2,piratas1,piratas2];
let persona1=new profesional("Sergio",35,90,1.70,true,"España",2,"director","./persona1.jpg");
let persona2=new profesional("Irene",20,90,1.70,true,"España",2,"director","./persona2.jpg");
let grupo2=[persona1,persona2];

function ver(){
    
    let div=document.getElementById("mostrar");
    div.innerHTML="";
    let a=0;
    for(a;a<=grupo.length;a++){
      console.log("hola");
    div.innerHTML+=`<div class='card' >
                <img class='phot' src='${grupo[a].photo}' >
                <div class='card-body'>
                  <h5 class='card-title'>'${grupo[a].title}'</h5>
                  <p class='card-text'></p>
                  <button type="button" class="btn btn-primary"  onclick="mostrar(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Mas informacion
                </button>
                </div>
              </div>`;
}
}
function mostrar(a){
  
 
let lista="";

for (const propiedad in grupo[a]){
    console.log("ho");
    console.log(propiedad);
    lista+="<li>"+propiedad+"-"+ grupo[a][propiedad]+"</li>";
    
}
let escribir=document.getElementById("escribir");
escribir.innerHTML=lista;


lista="";

}
function mostrarpersonas(){
  let div=document.getElementById("mostrar");
    div.innerHTML="";
    let a=0;
    for(a;a<=grupo2.length;a++){
      console.log("hola");
    div.innerHTML+=`<div class='card' >
                <img class='phot' src='${grupo2[a].photo}' >
                <div class='card-body'>
                  <h5 class='card-title'>'${grupo2[a].name}'</h5>
                  <p class='card-text'></p>
                  <button type="button" class="btn btn-primary"  onclick="mostrar1(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Mas informacion
                </button>
                </div>
              </div>`;
}
}
function mostrar1(a){
  
 
  let lista="";
  
  for (const propiedad in grupo2[a]){
      console.log("ho");
      console.log(propiedad);
      lista+="<li>"+propiedad+"-"+ grupo2[a][propiedad]+"</li>";
      
  }
  let escribir=document.getElementById("escribir");
  escribir.innerHTML=lista;
  
  
  lista="";
  
  }


function guardar(){
  
  let titulo=document.getElementById("name").value;
  let genero=document.getElementById("genero").value;
  let imagen=document.getElementById("imagen").value;
  let ano=document.getElementById("ano").value;
  let nacionalidad=document.getElementById("nacionalidad").value;
  let a=new movie(titulo,ano,nacionalidad,genero,imagen);
  grupo.push(a);
  a="";
  
}