class Electron{
  constructor(_loc,_dir,_speed, _angle){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.angle = _angle;
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move(){
    let angle = this.angle;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d =1;  //direction change
    vel.mult(this.speed*d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  checkEdges(){
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if (this.loc.x < 0 || this.loc.x > width || this.loc.y < 0 || this.loc.y > height) {
      this.loc.x = random(400, 500);
      this.loc.y = random(400, 500);
    }
  }
  update(){
    fill(255);
    ellipse(this.loc.x, this.loc.y, this.loc.z);
  }
}
