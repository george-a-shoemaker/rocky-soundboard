let sound0;
const samplePath = "assets/";
const sampleData0 = { file: "what-do-you-mean", label: "What do you mean? 🤨" };

var  myButton;

function preload() {
    soundFormats('mp3');
    sound0 = loadSound(`${samplePath}${sampleData0.file}`);
}
  

function setup() {
    let cnv =createCanvas(400, 800);
    // cnv.mousePressed(()=> { sound0.play()} );
    background(220);
    // draw your first button in top left corner

    myButton = new Button({
        x: width / 2, y: height / 2,
        width: 100, height: 50,
        align_x: 0, align_y: 0,
        content: sampleData0.label,
        on_press() {
            sound0.play();
        }
    });


    // position
}

function draw() {
    background(220);
    myButton.draw();
}

function canvasPressed() {
    sound0.play();
    console.log("canvasPressed")
}