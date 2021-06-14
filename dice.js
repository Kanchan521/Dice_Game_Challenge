
let f,g,c,d;
const playSound = new Audio('soundeffect/roll.wav');
const winSound = new Audio('soundeffect/win.wav');
function selp(){
   
   document.getElementById('demo').innerHTML="Let's Play";
    document.getElementById('headcomp').textContent="Player2:";
    document.getElementById('plays').textContent="Player1:"
    document.getElementById('hbutton').style.visibility="visible";
    document.getElementById('pbutton').style.visibility="visible";
    document.getElementById('pc').style.visibility="hidden";
 
}
function selcm(){
     document.getElementById('headcomp').textContent="Computer:";
    document.getElementById('plays').textContent="Player:"
    document.getElementById('hbutton').style.visibility="hidden";
    document.getElementById('pbutton').style.visibility="hidden";
    document.getElementById('pc').style.visibility="visible";
  
}


var cards=[1,2,3,4,5,6]

function randomcard(){
    let roll=Math.floor(Math.random()*6);
    return cards[roll];

}
function mypfun()
{
   c= randomcard();
   let cardImage=document.createElement('img')
   cardImage.setAttribute("class","imageplay")
   cardImage.src=`images/${c}.png`;
   document.getElementById('player').appendChild(cardImage);
   document.getElementById('pscore').innerHTML=c;
   playSound.play();
   setTimeout(()=>{
     d=randomcard();
    let cardImg=document.createElement('img')
    cardImg.setAttribute("class","imageplay")
    cardImg.src=`images/${d}.png`;
    document.getElementById('computer').appendChild(cardImg);
    document.getElementById('cscore').innerHTML=d;
    playSound.play();
 },500)
   
    setTimeout(()=>{
    if(c>d)
    document.getElementById('demo').innerHTML='Player won';
    else if(c<d)
    document.getElementById('demo').innerHTML='computer won';
    else if(c===d)
    document.getElementById('demo').innerHTML='both tied';
    winSound.play();
    },1400)
    document.getElementById('pc').disabled = true;
 }


function playone(){
    f= randomcard();
   let cardImage=document.createElement('img')
   cardImage.setAttribute("class","imageplay")
   cardImage.src=`images/${f}.png`;
   document.getElementById('player').appendChild(cardImage);
   document.getElementById('pscore').innerHTML=f;
   playSound.play();
   document.getElementById('pbutton').disabled = true;
   computerPoints();
}
function playtwo(){
    g= randomcard();
    let cardImg=document.createElement('img')
    cardImg.setAttribute("class","imageplay")
    cardImg.src=`images/${g}.png`;
    document.getElementById('computer').appendChild(cardImg);
    document.getElementById('cscore').innerHTML=g;
    playSound.play();
    document.getElementById('hbutton').disabled = true;
    computerPoints();
   }
function computerPoints(){
  if(document.getElementById('hbutton').disabled==true && document.getElementById('pbutton').disabled==true)
  {
        setTimeout(()=>{
            if(f>g)
        document.getElementById('demo').innerHTML='Player1 won';
        else if(f<g)
        document.getElementById('demo').innerHTML='Player2 won';
        else if(f==g)
        document.getElementById('demo').innerHTML='both tied';
        winSound.play();
        },500) 
     
 
}
}

 function reset()
{
   let myImage= document.querySelector('#player').querySelector('img')
   myImage.remove();
   let cImage= document.querySelector('#computer').querySelector('img')
   cImage.remove();
   document.getElementById('pscore').innerHTML=0;
   document.getElementById('cscore').innerHTML=0;
   document.getElementById('demo').innerHTML="Let's Play";
   document.getElementById('pc').disabled = false;
   document.getElementById('hbutton').disabled=false;
   document.getElementById('pbutton').disabled=false;
}
