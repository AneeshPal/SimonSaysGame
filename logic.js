let gameSeq=[];//empty array har level pe ek random color add hota hai
let userSeq=[];
let btncol=["red","green","yellow","purple"];
let started=false;
let level=0;//starting me =
let h2=document.querySelector('h2');
let highscore=0;
let h3=document.querySelector('h3');

document.addEventListener("keypress",function(){ //keypress is am event it works on pressing any key on keyboard
    if(started==false){
    console.log("game started");
    started=true; //game once started should not ne printed again and again 

  //we are calling level up function here bcz Reason 1: 
  //Game should start ONLY when user presses a key Agar user ne koi key press hi nahi ki, 
  //toh game ka level kaise start hoga?
  
    h3.innerText = `Highest score : ${highscore}`;
    levelup();// <-- Game officially starts here
}   
});

function btnflash(btn){
    //This creates the blink/flash effect.
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");//1second baad tye flash off ho jayega
    },250);
}
function userflash(btn){
    //This creates the blink/flash effect.
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");//1second baad tye flash off ho jayega
    },250);
}
function levelup(){
    userSeq=[];
    //1 level bdana hai
    level++;
    h2.innerText=`level ${level}`;// Show level on screen
    //choose random button
   let randindex=Math.floor(Math.random()*4);//0-3
   let randcol=btncol[randindex];
   let randbutton=document.querySelector(`.${randcol}`);

   gameSeq.push(randcol);
   console.log(gameSeq);
    //2 flash
     btnflash(randbutton);
}

function checkans(idx){
    // console.log(level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
        if(level>highscore){
            highscore=level;
        }
        h2.innerHTML=`game over! Your score was <b>${level}</b> <br> press any key to restart`;
        h3.innerText=`Highest score : ${highscore}`;
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white";  
    },200)
              
        
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn); 
    let usercol=btn.getAttribute("id");
    userSeq.push(usercol);
    checkans(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}