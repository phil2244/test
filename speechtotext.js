function runSpeechRecognition() {
    var output = document.getElementById("input");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart    
    
    recognition.onspeechend = function() {
        recognition.stop();
    }
  
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.value =  transcript;
        //output.classList.remove("hide");
    };
  
     recognition.start();
}
