const btnMenu = document.querySelector("#menu");
const menu = document.querySelector(".nabvar");
const btnclose = document.querySelector("#close");

if(btnMenu){
    btnMenu.addEventListener('click', () =>{
        menu.classList.add("active");
    })
}
if(btnclose){
    btnclose.addEventListener('click', () =>{
        menu.classList.remove("active");
    })
}



const mainImg = document.querySelector('#main-img');
const smallImg = document.querySelectorAll('.small-img');

smallImg.forEach((img)=>{
    img.addEventListener('click', ()=>{
        mainImg.src = img.src;
    })
})