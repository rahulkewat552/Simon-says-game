let gameseq=[];
let userseq=[];

let btn=["yellow","red","purple","green"]

let started=false;
let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started")
    started=true; 


levelup();

   }
  
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userseq=[];
    level++;
  h2.innerText=`level ${level}`;

 
let randomindex=Math.floor(Math.random()*4); 
let randomcolor=btn[randomindex];
let randombutton=document.querySelector( `.${randomcolor}`);
gameseq.push(randomcolor);
console.log(gameseq); 
// console.log(randomindex);
// console.log(randomcolor);
// console.log(randombutton);
gameflash(randombutton);
 



}

function checkans(index){
// console.log("current level",level);
// let index=level-1;
if(userseq[index]==gameseq[index]){
 if(userseq.length==gameseq.length){

    setTimeout(levelup,1000);
 }
     
} else{

    h2.innerHTML=`game over!  your score was <b>${level}<b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
         document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
}

}

function btnpress(){
    //  console.log(this);
    let btn=this;
    userflash(btn);

usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);
checkans(userseq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(btns of allbtn){
    btns.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0; 
}