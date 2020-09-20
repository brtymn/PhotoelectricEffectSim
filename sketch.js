// UI definitions start.
let W = 1200  //width of bgCanvas
let H = 500  //height of bgCanvas
let Wsim = W * 0.69 
let Hsim = H
let Wplot = 0.25 * W
let Hplot = 0.875 * H 
let bgCanvas, simCanvas, plotCanvas;
// UI definitions end.

 
// Constant definitions start.

let plancks_constant = (6.626 * Math.pow(10, -34)); // In Joules * Seconds.
let speed_of_light = (299792458); // In Meters / Seconds.

// Constants definitions end.


// Variable definitions start.

let light_intensity = 0;
let light_wavelength = 0; // In nanometers.

// Variable definitions start.


// Photoemissive material work function definitions start.

let surface_Al = 4.3 // Aluminum Surface
let surface_Cr = 4.5; // Chromium Surface
let surface_Mn = 4.1; // Manganese Surface
let surface_Fe = 4.7; // Iron Surface
let surface_Co = 5; // Cobalt Surface
let surface_Au = 5.1; // Gold Surface

let selected_surface = 0; // Will add a selection mechanism.

// Photoemissive material work function definitions end.



function setup() {
  bgCanvas = createCanvas(W, H)
  
  simCanvas = createGraphics(Wsim, Hsim)
  
  plotCanvas = createGraphics(Wplot, Hplot)
  plotCanvas.background(20)
  plotCanvas.stroke(255)
  plotCanvas.strokeWeight(3)
  plotCanvas.noFill()
  plotCanvas.rect(0, 0, Wplot, Hplot)}


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
   
// Selection using the dropdown fucntions will be added here.
  if(selected_surface = surface_Al){
     selected_surface = surface_Al;
     rect(250, 350, 300, 25);
     fill('white');
     }
  else if(selected_surface == surface_Cr) {
    selected_surface = surface_Cr;
    rect(250, 350, 300, 25);
    fill('white');
    }
  else if(selected_surface == surface_Mn) {
    selected_surface = surface_Mn;
    rect(250, 350, 300, 25);
    fill('white');
    }
  else if(selected_surface == surface_Fe) {
    selected_surface = surface_Fe;
    rect(250, 350, 300, 25);
    fill('white');
    }
  else if(selected_surface == surface_Co) {
    selected_surface = surface_Co;
    rect(250, 350, 300, 25);
    fill('white');
    }
  else if(selected_surface == surface_Au) {
    selected_surface = surface_Au;
    rect(250, 350, 300, 25);
    fill('white');
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



