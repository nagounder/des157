function setup() {
  createCanvas(600, 300);
  background('#FFC300');
}

function draw() {
   stroke(255);
   strokeWeight(5);
   smooth();

   if (mouseIsPressed) {
     line(pmouseX, pmouseY, mouseX, mouseY);
   }
  }

  function keyPressed() {
    if (keyCode == BACKSPACE) {
      background('#FFC300');
    }
  }
