

class Characters{
    constructor(image,name,health){
        this.image=image;
        this.name=name;
        this.health=health;
    }     
}

   
function printCharacter(imageP,nameP,pointsP){
document.getElementById('character').innerHTML=`<img src="${imageP}" width="100"> <br> <h3> ${nameP}</h3><h3> Points = ${pointsP}</h3>`;
}

const cloud=new Characters('Pics/Cloud.gif','Cloud',1000);
const squall=new Characters('Pics/Squall.gif','Squall',1000);
const solbadguy=new Characters('Pics/Solbadguy.gif','Solbadguy',1000);


