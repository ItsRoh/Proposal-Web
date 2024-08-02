
const contE1=document.querySelector(".container");
const opts=["Hey, I Really Like You ..","Will You Be My Date ?"];
let index=0;
let charIndex=0;
updateText();
function updateText(){
    charIndex++;
    contE1.innerHTML=`<h1>${opts[index].slice(0,charIndex)} </h1>`;
    if(charIndex===opts[index].length){
        index++;
        charIndex=0;
    }
    if(index===opts.length){
        index=0;
    }
    tame =setTimeout(updateText,250);
}

function fun(){

    contE1.innerHTML=`<h1>Thank You..! &#129392<\h1>`;
   clearTimeout(tame);

   const mbtn =document.querySelector(".btn2");
   const cbtn=document.querySelector(".btn");
   const bodyE1=document.querySelector("body");
   bodyE1.removeChild(mbtn);
   bodyE1.removeChild(cbtn);

}

function fun2(){
    const mbtn =document.querySelector(".btn2");
    const mytop=Math.random()*90;
    const myleft=Math.random()*90;
    mbtn.style.position="absolute";
    mbtn.style.top=mytop+"vh";
    mbtn.style.left=myleft+"vw";
}


