function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}

function draw() {
   stroke('#FFC300');
   strokeWeight(5);
   smooth();

   if (mouseIsPressed) {
     line(pmouseX, pmouseY, mouseX, mouseY);
   }
  }

  function keyPressed() {
    if (keyCode == BACKSPACE) {
      background(255);
    }
  }
