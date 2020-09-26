
class Electron {
  constructor(input_x, input_y, input_vx, input_vy, input_colorr, input_diameter) {

    this.position_vector = createVector(input_x, input_y);
    this.velocity_vector = createVector(input_vx, input_vy);
    
    this.diameter = input_diameter; // Diameter definition, may be changed to a slider later on.
    
    this.colorr = input_colorr; // Color definition.
    
  }
  show() {

    noStroke();
    circle(this.position_vector.x, this.position_vector.y, this.diameter);
  }
}
