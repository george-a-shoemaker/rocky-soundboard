let sound0;
const samplePath = "assets/";
const sampleData0 = { file: "what-do-you-mean", label: "What do you mean? 🤨" };

// touch gui
let gui;
let button;

var  myButton;

function preload() {
    soundFormats('mp3');
    sound0 = loadSound(`${samplePath}${sampleData0.file}`);
}
  

function setup() {
    let cnv =createCanvas(400, 800);
    // cnv.mousePressed(()=> { sound0.play()} );
    background(220);

    gui = createGui();
    button = createButton("Button button", 50, 50, 200, 200);
    button.onPress = () => {
        console.log("button pressed");
        sound0.play()
    }
}

function draw() {
    background(220);
    drawGui();
}

function canvasPressed() {
    sound0.play();
    console.log("canvasPressed")
}