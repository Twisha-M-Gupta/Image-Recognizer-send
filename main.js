Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var div = document.getElementById("web");

Webcam.attach('#web');

function pictureTaken() {
    Webcam.snap(function(data_uri) {
        document.getElementById("identifyPicture").innerHTML = '<img id="camera" src="' + data_uri + '"/>';
    });
}

console.log('ml5', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Atgds8SaO/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model has loaded');
}