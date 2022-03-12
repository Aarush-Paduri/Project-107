function PlaySound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classify1 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yoj0ECb4n/model.json', modelLoaded)
}

function modelLoaded(){
    classify1.classify(gotResults);
}

function gotResults(error, results) {
    console.log('gotResults')
}