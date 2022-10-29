//https://teachablemachine.withgoogle.com/models/dbtZB6L_j/
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true}) //code to allow access to the microphone//
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbtZB6L_j/model.json', modelready)
    
    }

 function modelReady() {
    classifier.classify(gotResults)
    }

    function gotResults(error, results) {
   console.log(gotResults)
}