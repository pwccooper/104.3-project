class Characters{
    constructor(image,name,health){
        this.image=image;
        this.name=name;
        this.health=health;
    }
}

function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname;
    this.Itemimage=Itemimage;
    this.Itemcolor= Itemcolor;
    this.Itemdamage=Itemdamage;
}

const Buster = new items('Buster Sword','+','Steel',150);
const Gunblade = new items('Gunblade','-','Steel',125);

const itemsArray=[Buster,Gunblade];

console.log(Buster);
console.log(Gunblade);

function printCharacter(imageP,nameP,pointsP){
    document.getElementById('character').innerHTML=`<img src="${imageP}" width="100"> <br> <h3> ${nameP}</h3><h3> Points = ${pointsP}</h3>`;
}

let startPoints=1000;
const c=new Characters('Pics/Cloud.gif','Cloud',startPoints);
const s=new Characters('Pics/Squall.gif','Squall',startPoints);
const so=new Characters('Pics/Solbadguy.gif','Solbadguy',startPoints);

let selection;

const charactersArray=[c,s,so];

const squall = {
    image:'Pics/Squall.gif',
    speed:150,
    item:{
        power:125,
        image:'Pics/gunblade.png',
    },
    health:1000,

    die:function(){
        return 'Squall is Dead... \n G A M E  O V E R!'
    }
} 

const cloud = {
    image:'Pics/Cloud.gif',
    speed:100,
    item:{
        power:150,
        image:'Pics/buster.png',
    },  
    health:1000,

    die:function(){
        return 'Cloud is Dead... \n G A M E  O V E R!'
    }
} 

const solbadguy = {
    image:'Pics/Solbadguy.gif',
    speed:125,
    power: 125,
    health:1000,

    die:function(){
        return 'Solbadguy is Dead... \n G A M E  O V E R!'
    }
} 

console.log(cloud);
console.log(squall);
console.log(solbadguy);


selection= prompt("Select a character: \n cloud \n squall \nsolbadguy");

switch (selection) {
    case 'cloud':        
        printCharacter('Pics/Cloud.gif','Cloud',1000);
        break;
    case 'squall':        
        printCharacter('Pics/Squall.gif', 'Squall',1000);
        break;
    case 'solbadguy': 
        printCharacter('Pics/Solbadguy.gif','Solbadguy',1000);
        break;      
   
    default:
        alert('Please, select a valid option');
        break;
}


let cloudAttackPoints= cloud.item.power;
let squallAttackPoints= squall.item.power;

function cloudAttack(){
    squall.health = squall.health-cloudAttackPoints;
   console.log('Cloud attacks Squall: \n' + squall.health);
    
   if(squall.health<=0){
        document.getElementById('message').innerHTML=`${squall.die()} <img src="${squall.image}" alt="Squall">`
        console.log(squall.die());
    }  
}

function squallAttack(){
    cloud.health = cloud.health-squallAttackPoints;
   console.log('Squall attacks Cloud: \n' + cloud.health);
    
   if(cloud.health<=0){
       document.getElementById('message').innerHTML=`${cloud.die()} <img src="${cloud.image}" alt="Cloud">`;
        console.log(cloud.die());
    }  
}

if(charactersArray.points<=0){
    document.getElementsById('character').innerHTML='<h4> G A M E  O V E R!</h4>'
}


cloudAttack();
cloudAttack();
cloudAttack();
cloudAttack();
cloudAttack();
cloudAttack();
cloudAttack();
