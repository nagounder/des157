void setup() {
 size(300, 300);
 background(0);
}


void draw() {
 stroke(255);
 strokeWeight(4);
 smooth();
 // Draw if mouse is pressed
 if (mousePressed) {
   line(pmouseX, pmouseY, mouseX, mouseY);
 }
}

void keyPressed() {
  if (keyCode == BACKSPACE) {
    background(0);
  }
}