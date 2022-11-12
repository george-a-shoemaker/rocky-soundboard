const screenW = 1000;
let screenH;

let soundSampleArray;
let sounds; // loaded sound files mapped from soundSamples
let buttons; // 

const samplePath = "assets/";
const sampleData0 = { file: "what-do-you-mean", label: "What do you mean? 🤨" };

// touch gui
let gui;
// let button;

var  myButton;

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

    let cnv =createCanvas(400, 800);
    // cnv.mousePressed(()=> { sound0.play()} );
    background(220);

    // soundSamples.forEach( (sample, index) => {
    //     const button = createButton(sample.label, 5, 5 + index *50, 200, 45);
    //     const sound = sounds[index];
    //     button.onPress = () => { sound.play() }
    // })

    gui = createGui();

    // button = createButton("Button button", 50, 50, 200, 200);
    // button.onPress = () => {
    //     console.log("button pressed");
    //     sound0.play()
    // }
}

function draw() {
    background(220);
    drawGui();
}

function canvasPressed() {
    sound0.play();
    console.log("canvasPressed")
}