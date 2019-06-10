// Your code goes here

//click
const button = document.querySelector(".btn");
button.addEventListener("mouseover", function(event) {
  this.style.backgroundColor = "red";
});

//double click on container
const contain = document.querySelector(".container");
contain.addEventListener("dblclick", function(event) {
  console.log(`Container was clicked.`);
});

//double click on anchor
//stops propagation and prevents clicks to another site
const anchor = document.querySelector("a");
anchor.addEventListener("dblclick", function(event) {
  console.log(`Anchor was clicked`);
  event.preventDefault();
  event.stopPropagation();
});

//image disapears
const image = document.querySelector(".img-content");
image.addEventListener("mouseleave", function(event) {
  event.target.style.display = "none";
});

//image drag
const imageDrag = document.querySelector(".img-content");
imageDrag.addEventListener("drag", function(event) {
  console.log("Img was dragged");
  event.stopPropagation();
});

//mousedown
const text = document.querySelector(".text-content");
text.addEventListener("mousedown", function(event) {
  console.log("Text has been pressed.");
});

//wheel
const wheel = document.querySelector("h4");
wheel.addEventListener("wheel", function(event) {
  console.log("Wheel being used.");
});

//mouse up
const up = document.querySelector("h2");
up.addEventListener("mouseup", function(event) {
  console.log("Mouse is going up!!");
});

//mousemove
const move = document.querySelector(".content-pick");
move.addEventListener("mousemove", function(event) {
  console.log("Mouse is moving!!");
});

//mouse enter
const enter = document.querySelector(".destination");
enter.addEventListener("mouseenter", function(event) {
  console.log("Mouse is entering!!");
  event.stopPropagation();
});

//out
const out = document.querySelector("h2");
out.addEventListener("mouseout", function(event) {
  console.log("Moving out");
});
