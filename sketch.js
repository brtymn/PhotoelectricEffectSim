// Constant definitions begin.

let plancks_constant = (6.626 * Math.pow(10, -34)); // In Joules * Seconds

// Constants definitions end.


// Variable definitions start.

let light_intensity = 0;
let light_wavelength = 0;

// Variable definitions start.


// Photoemissive material work function definitions start.

let surface_Al_Ti_V = 4.3 // Aluminum, Titanium, Vanadium
let surface_Cr = 4.5; // Chromium
let surface_Mn = 4.1; // Manganese
let surface_Fe = 4.7; // Iron
let surface_Co = 5; // Cobalt
let surface_Ni = 5.15; // Nickel
let surface_W = 4.55; // Tungsten
let surface_Au = 5.1; // Gold

let selected_work_function = 0; // Will add a selection mechanism.

// Photoemissive material work function definitions end.



function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
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






