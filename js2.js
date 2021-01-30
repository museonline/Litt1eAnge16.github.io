document.addEventListener("DOMContentLoaded", () =>{

// variable —--------------->
var button = document.querySelector(".button");
var circle = document.querySelector(".circle");
var mode = document.querySelector(".dark-light");
var h6 = document.querySelector(".h6");

// animate —--------------->
button.addEventListener("click",() =>{

// circle —--------------->
circle.classList.toggle("active"
)
// d&l mode —--------------->
mode.classList.toggle("active")

// button —--------------->
button.classList.toggle("active")

// remove this —--------------->
h6.classList.toggle("active");

})

});