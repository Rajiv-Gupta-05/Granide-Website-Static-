
rtc = () =>{
    Array.from(document.getElementsByClassName('wi-ch')).forEach((el)=>{
        el.style.width = 0;
    })
}

Array.from(document.getElementsByClassName('w-ch')).forEach((el, i)=>{
    el.addEventListener('click',()=>{
       rtc();
       let rnd = Math.floor(Math.random()*360);
       document.getElementsByClassName('wi-ch')[i].style.width="200px";
       document.getElementById(('val')).innerText = i+1;
       document.getElementsByTagName('header')[0].style.filter = `hue-rotate(${rnd}deg)`;
    })
})