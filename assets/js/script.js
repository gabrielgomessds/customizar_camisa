const customShirt = document.querySelector(".custom_shirt");

const nomeUp = document.querySelector(".nome_up");
const customUp = document.querySelector(".custom_up");

const numberShirt = document.querySelector(".number_shirt");
const customNumber = document.querySelector(".custom_number");

const nomeDown = document.querySelector(".nome_down");
const customDown = document.querySelector(".custom_down");

const color = document.querySelector(".color");
const test = document.querySelector(".test");

nomeUp.addEventListener("keyup",()=>{
    customUp.innerHTML = nomeUp.value.toUpperCase();
});

numberShirt.addEventListener("keyup", ()=>{
    customNumber.innerHTML = numberShirt.value;
});

nomeDown.addEventListener("keyup", ()=>{
    customDown.innerHTML = nomeDown.value.toUpperCase();
})

color.addEventListener("input", ()=>{
    customShirt.style.color = color.value;
})