"use strict"; //strict

var myself = document.getElementById("myself");  //variable for figure image

myself.addEventListener("click", function(){
    alert("ahh, you poked me!");
});

var keys = document.getElementById("keys"); //variable for keys image

keys.addEventListener("click", function(){
    alert("One key to take me home, and two to let me in!");
});

var mask = document.getElementById("mask");   //variable for sleeping mask image

mask.addEventListener("click", function(){
    alert("The real sleeping mask is my brain!");
});

var cellphone = document.getElementById("cellphone"); //variable for cellphone image

cellphone.addEventListener("click", function(){
    alert("I cracked my phone screen last March!");
});
