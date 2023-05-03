
export class movie{
    title=string;
    releaseyear=number;
    actors=[];
nacionality=string;
director=string;
writer=string;
language=string;
plataforma=string;
isMCU=boolean;
mainCharacterName=string;
producer=string;
distributor=string;
genre=string;
photo=string;
constructor(title,releaseyear,nacionality,genre,photo){
    this.title=title;
    this.releaseyear=releaseyear;
    this.nacionality=nacionality;
    this.genre=genre;
    this.photo=photo;
    
}
mostrarmovie(){
    
    console.log(this.title);
    console.log(this.releaseyear);
    for(let a=0;a<this.actors.length;a++){
       console.log(this.actors[a]);
         
    }
    console.log(this.nacionality);
    console.log(this.director);
    console.log(this.writer);
    
    console.log(this.language);
    console.log(this.plataforma);
    console.log(this.isMCU);
    console.log(this.mainCharacterName);
    console.log(this.producer);
    console.log(this.distributor);
    console.log(this.genre);
    
    }
}
