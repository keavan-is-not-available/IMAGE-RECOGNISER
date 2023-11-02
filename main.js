Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById('camera');
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById('captured_image').innerHTML = "<img src=" + data_uri + " id='img1'>"
    });
}
console.log("ml5 version is", ml5.version)
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yQ-AVpceI/model.json", modelLoaded)
function modelLoaded(){
    console.log("model has been loaded successfully")
}
function predict() {
    img = document.getElementById("img1");
    Classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("name").innerHTML = "object name: "+results[0].label;
        document.getElementById("accuracy").innerHTML = "confidence: "+results[0].confidence.toFixed(2);
        
    }
}
