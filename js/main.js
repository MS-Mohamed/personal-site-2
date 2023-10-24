
let bars = document.getElementById("bars");
let list = document.getElementById("list");
let close = document.getElementById("close");
let H = document.getElementById("H");
let S = document.getElementById("S");
let P = document.getElementById("P");
let K = document.getElementById("K");
let C = document.getElementById("C");

function bar (){
    list.style.display="block"
}

function X (){
    list.style.display="none"
}

bars.addEventListener("click" , bar);
close.addEventListener("click" , X);
H.addEventListener("click" , X);
P.addEventListener("click" , X);
K.addEventListener("click" , X);
S.addEventListener("click" , X);
C.addEventListener("click" , X);