//https://teachablemachine.withgoogle.com/models/dbtZB6L_j/
bark = ""
meow=""
moo=""
roar=""

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true}) //code to allow access to the microphone//
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbtZB6L_j/model.json', modelReady)
    
    }

 function modelReady() {
    classifier.classify(gotResults)
    }

    function gotResults(error, results) {
      if(error) {
         console.error(error);
         }
         else {

            console.log(results);
random1 = Math.floor(Math.random()* 255) +1 ;
random2 = Math.floor(Math.random()*255) +1;
random3 = Math.floor(Math.random()*255) +1;
 
document.getElementById("audioplaying").innerHTML = 'I can hear ' + results[0].label;
document.getElementById("animalaudionumber").innerHTML = 'Accuracy' + (results[0].confidence * 100).toFixed(2) + "%";
         
document.getElementById("audioplaying").style.color= "rgb("+ random1 + ", "+ random2 + ", " + random3 +" )";
document.getElementById("animalaudionumber").style.color = "rgb("+ random1 +" ,"+ random2 + ","+ random3 + ")";


if(results[0].label == "barking") {
img.src='dog.jpg';

}
else if(results[0].label == 'meowing') {
   img.src='cat.png'
}
else if(results[0].label == 'roaring') {
   img.src='lion.jpg'
}

else if(results[0].label == 'mooing') {
  img.src='cow.png'
}
else {
img.src='image1.png'

}


}
}