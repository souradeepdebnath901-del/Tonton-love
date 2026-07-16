const btn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const loveBtn = document.getElementById("love");

const message = `Dear Tontonii ❤️,

I don't know if this little surprise can explain everything in my heart...

But I want you to know one thing.

You are my safest place.
My biggest happiness.
And my favourite person.

Every smile of yours makes my day better.

Thank you for every memory...
Every laugh...
Every little moment.

From the day
20 August 2025

my life became more beautiful.

No matter what happens...

I'll always choose you.

Forever yours,

❤️ Tonton`;

btn.onclick = () => {

letter.classList.remove("hidden");

window.scrollTo({
top: letter.offsetTop,
behavior: "smooth"
});

typing.innerHTML="";

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

};

loveBtn.onclick=()=>{

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.transition="4s";
heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-50px";

},50);

setTimeout(()=>{

heart.remove();

},4000);

}

alert("I Love You Forever ❤️");
};

// Auto Gallery Scroll

const slider=document.querySelector(".slider");

setInterval(()=>{

slider.scrollBy({

left:300,

behavior:"smooth"

});

if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

},3000);