const screenW = 600;
let screenH; // Computed based on # of buttons'

const margin = 10;
const buttonWidth = screenW - margin * 2;
const buttonHeight = 80; // includes the margin

let soundSampleArray; // array of data loaded from JSON
let sounds; // array of loaded sound files mapped from soundSampleArray
let buttons; // array of buttons mapped from soundSampleArray

let gui;

function preload() {
// Asynchronous loading happens here

    let soundSampleDataObject = loadJSON(
        // loadJSON() returns an object with index as keys (annoying)

        './assets/sound-sample-data.json',
        () => {
            // Here we map the object keys to a proper array or value
            soundSampleArray = Object.keys(soundSampleDataObject).map(
                key => { return soundSampleDataObject[key] }
            );

            soundFormats('mp3');
            sounds = soundSampleArray.map( sound => {
                const filepath = "assets/" + sound.file
                return loadSound(filepath)
            });
         }
    );
}
  

function setup() {

    screenH = margin + sounds.length * buttonHeight;

    const canvas = createCanvas(screenW, screenH); // side effecty
    canvas.parent('sketch-holder');
    canvas.style("display", "block");


    gui = createGui();
    gui.loadStyle("Rose");
    gui.setTextSize(32);

    soundSampleArray.forEach( (sample, index) => {
        const button = createButton(
            sample.label,
            margin, margin + index * buttonHeight,
            buttonWidth, buttonHeight - margin);
            // side effecty, gui holds a button reference
        const sound = sounds[index];
        button.onPress = () => { sound.play() }
    });
}

function draw() {
    background(220);
    drawGui();
}

function canvasPressed() {
    sound0.play();
    console.log("canvasPressed")
}