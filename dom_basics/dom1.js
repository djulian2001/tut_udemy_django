// dom1.js
console.log("Connected!"); // validate the script is working

var head_one = document.querySelector("#one");
var head_two = document.querySelector("#two");
var head_three = document.querySelector("#three");

head_one.addEventListener(
  'mouseover',
  function(){ 
    head_one.textContent = "Mouse Currently Over";
    head_one.style.color = "red";
  }
)

head_one.addEventListener(
  'mouseout',
  function(){
    head_one.textContent = "hover over me!";
    head_one.style.color = 'black';
  }
)

head_two.addEventListener(
  'click',
  function(){
    head_two.textContent = "clicked on";
    head_two.style.color = 'blue';
    head_two.setAttribute('href','https://www.google.com');
  }
)

head_three.addEventListener(
  'dblclick',
  function(){
    head_two.textContent = "click on me!";
    head_two.style.color = "black";
    head_three.textContent = "my turn!";
    head_three.style.color = "purple";
  }
)