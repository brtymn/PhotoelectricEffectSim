// UI definitions start.
let W = 1200  //width of bgCanvas
let H = 500  //height of bgCanvas
let Wsim = W * 0.69
let Hsim = H
let Wplot = 0.25 * W
let Hplot = 0.875 * H
let bgCanvas, simCanvas, plotCanvas;

let wavelength_slider;
// UI definitions end.


var number_of_electrons = 1000;
let electrons = [number_of_electrons];



var number_of_photons = 2000;
var photons = [number_of_photons];
let photon_color;
let photon_color_selector = 0;

// Constant definitions start.

let plancks_constant = (6.626 * Math.pow(10, -34)); // In Joules * Seconds.

let speed_of_light = (299792458); // In Meters / Seconds.

// Constants definitions end.


// Variable definitions start.

let light_intensity = 0;
let light_wavelength; // Tied to a slider.


// Variable definitions end.


// Photoemissive material work function definitions start.

let surface_Al = 4.3 // Aluminum Surface
let surface_Cr = 4.5; // Chromium Surface
let surface_Mn = 4.1; // Manganese Surface
let surface_Fe = 4.7; // Iron Surface
let surface_Co = 5; // Cobalt Surface
let surface_Au = 5.1; // Gold Surface

let selected_surface = surface_Al; // Will add a selection mechanism.

// Photoemissive material work function definitions end.

//wavelength_color = getRGB(light_wavelength);

function setup() {

  electron_location_x = random(400, 550);

  bgCanvas = createCanvas(W, H)

  simCanvas = createGraphics(Wsim, Hsim)

  plotCanvas = createGraphics(Wplot, Hplot)
  plotCanvas.background(20)
  plotCanvas.stroke(255)
  plotCanvas.strokeWeight(3)
  plotCanvas.noFill()
  plotCanvas.rect(0, 0, Wplot, Hplot)

  // Slider Definitions Start
  wavelength_slider = createSlider(380, 780, 30);
  wavelength_slider.position(500, 10);
  wavelength_slider.style('width', '80px');
  // Slider Definitions End


  PhotonField();


  // Button Definitions Start
  color_reset_button = createButton("Send Light Pulse");
  color_reset_button.position(100, 100);
  color_reset_button.mousePressed(PhotonField);
  // Button Definitions End
}
function draw(){
  //border of simCanvas
  simCanvas.clear()
  simCanvas.stroke(255)
  simCanvas.strokeWeight(2)
  simCanvas.noFill()
  simCanvas.rect(10, 10, Wsim - 20, Hsim - 20)
  simCanvas.fill(255);
  simCanvas.arc(400, 150, 300, 25, PI, TWO_PI);

  //sim canvas
  image(simCanvas, 0, 0);

  // Slider Definitions Start
  //light_wavelength = wavelength_slider.value(); // May be useful in the future.
  // Slider Definitions End

// Selection using the dropdown fucntions will be added here.
  if(selected_surface == surface_Al){
     selected_surface = surface_Al;
     rect(0 , 470, W * 0.69 , 35);
     fill('white');
     }
  else if(selected_surface == surface_Cr) {
    selected_surface = surface_Cr;
    rect(150, 350, 500, 25);
    fill('white');
    }
  else if(selected_surface == surface_Mn) {
    selected_surface = surface_Mn;
    rect(150, 350, 500, 25);
    fill('white');
    }
  else if(selected_surface == surface_Fe) {
    selected_surface = surface_Fe;
    rect(150, 350, 500, 25);
    fill('white');
    }
  else if(selected_surface == surface_Co) {
    selected_surface = surface_Co;
    rect(150, 350, 500, 25);
    fill('white');
    }
  else if(selected_surface == surface_Au) {
    selected_surface = surface_Au;
    rect(150, 350, 500, 25);
    fill('white');
    }


  fill(0, 10);
  noStroke();
  rect(0, 0, W * 0.69 , height);
  for (let i = 0; i < photons.length; i++) {
    photons[i].run();
  }


}
// Convert wavelength values to frequency.
function wavelength_to_frequency(){

  return (1 / light_wavelength);

}


// Calculate energy for each wave packet.
function calculate_energy(){

  let light_frequency = wavelength_to_frequency();

  return (plancks_constant * light_frequency);

}


// Calculate the maximum kinetic energy.
function calculate_max_kinetic_energy(){

  let packet_energy = calculate_energy();

  return (packet_energy - selected_work_function);

}


// Calculate the cutoff wavelength.
function calculate_cutoff_wavelength(){

  return ((plancks_constant * speed_of_light) / (selected_surface))

}


function PhotonField(){

  // Photon Flow Field Start
  for (let i = 0; i < number_of_photons; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var photon_loc = createVector(random(100), random(100), 2);
    var photon_angle = 45; //any value to initialize
    var photon_dir = createVector(cos(photon_angle), sin(photon_angle));
    var photon_speed = 2;
    photons[i]= new Photon(photon_loc, photon_dir, photon_speed, photon_angle);
  }
  // Photon Flow Field End

}

function ElectronStream(){

  // Photon Flow Field Start
  for (let j = 0; j < number_of_electrons; j++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var electron_loc = createVector(random(400, 500), random(400, 500), 2);
    var electron_angle = 135; //any value to initialize
    var electron_dir = createVector(cos(electron_angle), sin(electron_angle));
    var electron_speed = 2;
    electrons[i]= new Electron(electron_loc, electron_dir, electron_speed, electron_angle);
  }
  // Photon Flow Field EndW

}
