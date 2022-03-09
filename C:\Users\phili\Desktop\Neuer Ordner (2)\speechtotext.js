
/* JS comes here */
function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("input");
    // get action element reference
    // var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
      
    };
    
    recognition.onspeechend = function() {
       
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        //var confidence = event.results[0][0].confidence;
        output.value =  transcript;//confidence*100+"%";
        //output.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}
