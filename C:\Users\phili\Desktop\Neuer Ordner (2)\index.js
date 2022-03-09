function Senden() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    output(input);
}


document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    })
  })
  
  function output(input) {
    let product;
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/bitte /g, "")
      .replace(/ bitte/g, "")
      .replace(/ bitte /g, " ")
      .replace(/r u/g, "are you")
      .replace(/geht es/g, "geht's")
      .replace(/ä/g, "ae")
      .replace(/ü/g, "ue")
      .replace(/ö/g, "oe")
      .replace(/der /g, "")
      .replace(/ der/g, "")
      .replace(/ der /g, " ")
      .replace(/die /g, "")
      .replace(/ die/g, "")
      .replace(/ die /g, " ")
      .replace(/ das /g, " ")
      .replace(/das /g, "")
      .replace(/ das/g, "")
      .replace(/ ein /g, " ")
      .replace(/ ein/g, "")
      .replace(/ein /g, "")
      .replace(/ eine /g, " ")
      .replace(/eine /g, "")
      .replace(/ eine/g, "")
      .replace(/ einen /g, " ")
      .replace(/einen /g, "")
      .replace(/ einen/g, "")
      .replace(/ deine /g, " ")
      .replace(/deine /g, "")
      .replace(/ deine/g, "")
      .replace(/dein /g, "")
      .replace(/ dein/g, "")
      .replace(/ dein /g, " ");
  
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/danke/gi)) {
      product = danke[Math.floor(Math.random() * danke.length)];
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    // Update DOM
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `${input}`;
    userDiv.className = "hi2";
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botWait = document.createElement("div");
    let botText = document.createElement("div");
    botDiv.id = "bot";
    botWait.id = "Loading";
    //botImg.src = "loading.gif";
    botWait.className = "Wait";
    botDiv.className = "hi";
    //botText.innerText = '<img src="loading-11.gif">';
    botDiv.appendChild(botText);
    botDiv.appendChild(botWait);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay to seem "real"
    setTimeout(() => {
      var botWait = document.getElementById('Loading');
      botWait.remove();
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 2000
    )
  };

  online = window.navigator.onLine;

  window.setInterval("pruefung()",3000);
  function pruefung() {
      if (navigator.onLine) {
          document.getElementById("status").innerHTML = "Online";
      } else {
           document.getElementById("status").innerHTML = "Offline";
     
      }
  };

  function schleife1() {
    const messagesContainer = document.getElementById("messages");

    let schleife1Div = document.createElement("div");
    let schleife1Wait = document.createElement("div");
    let schleife1Text = document.createElement("div");
    schleife1Wait.id = "Loading";
    schleife1Wait.className = "Wait";
    schleife1Div.id = "schleife1Id";
    schleife1Div.className = "hi";
    schleife1Div.appendChild(schleife1Text);
    schleife1Div.appendChild(schleife1Wait);
    messagesContainer.appendChild(schleife1Div);
    //let schleife2Div = document.createElement("div");
    //let schleife2Text = document.createElement("div");
    //schleife2Div.id = "schleife2Id";
    //schleife2Div.className = "hi2";
    //schleife2Text.innerText = "hier erscheint die Automatische Frage?"
    //schleife2Div.appendChild(schleife2Text);
    //messagesContainer.appendChild(schleife2Div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
      var schleife1Wait = document.getElementById('Loading');
      schleife1Wait.remove();
      schleife1Text.innerText = "was sind fake news und warum verbreitet mann sie";
    }, 2000
  )
};

function schleife2() {
  const messagesContainer = document.getElementById("messages");

  let schleife1Div = document.createElement("div");
  let schleife1Wait = document.createElement("div");
  let schleife1Text = document.createElement("div");
  schleife1Wait.id = "Loading";
  schleife1Wait.className = "Wait";
  schleife1Div.id = "schleife1Id";
  schleife1Div.className = "hi";
  schleife1Div.appendChild(schleife1Text);
  schleife1Div.appendChild(schleife1Wait);
  messagesContainer.appendChild(schleife1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var schleife1Wait = document.getElementById('Loading');
    schleife1Wait.remove();
    schleife1Text.innerText = "was kann man gegen fake news machen";
  }, 2000
)
};

function schleife3() {
  const messagesContainer = document.getElementById("messages");

  let schleife1Div = document.createElement("div");
  let schleife1Wait = document.createElement("div");
  let schleife1Text = document.createElement("div");
  schleife1Wait.id = "Loading";
  schleife1Wait.className = "Wait";
  schleife1Div.id = "schleife1Id";
  schleife1Div.className = "hi";
  schleife1Div.appendChild(schleife1Text);
  schleife1Div.appendChild(schleife1Wait);
  messagesContainer.appendChild(schleife1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var schleife1Wait = document.getElementById('Loading');
    schleife1Wait.remove();
    schleife1Text.innerText = "ie bemrkt mann das eine info fake ist";
  }, 2000
)
};
function schleife4() {
  const messagesContainer = document.getElementById("messages");

  let schleife1Div = document.createElement("div");
  let schleife1Wait = document.createElement("div");
  let schleife1Text = document.createElement("div");
  schleife1Wait.id = "Loading";
  schleife1Wait.className = "Wait";
  schleife1Div.id = "schleife1Id";
  schleife1Div.className = "hi";
  schleife1Div.appendChild(schleife1Text);
  schleife1Div.appendChild(schleife1Wait);
  messagesContainer.appendChild(schleife1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var schleife1Wait = document.getElementById('Loading');
    schleife1Wait.remove();
    schleife1Text.innerText = "was genau ist ein deep fake";
  }, 2000
)
};
function schleife5() {
  const messagesContainer = document.getElementById("messages");

  let schleife1Div = document.createElement("div");
  let schleife1Wait = document.createElement("div");
  let schleife1Text = document.createElement("div");
  schleife1Wait.id = "Loading";
  schleife1Wait.className = "Wait";
  schleife1Div.id = "schleife1Id";
  schleife1Div.className = "hi";
  schleife1Div.appendChild(schleife1Text);
  schleife1Div.appendChild(schleife1Wait);
  messagesContainer.appendChild(schleife1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var schleife1Wait = document.getElementById('Loading');
    schleife1Wait.remove();
    schleife1Text.innerText = "ie werden fake new verbreitet";
  }, 2000
)
};
function schleife6() {
  const messagesContainer = document.getElementById("messages");

  let schleife1Div = document.createElement("div");
  let schleife1Wait = document.createElement("div");
  let schleife1Text = document.createElement("div");
  schleife1Wait.id = "Loading";
  schleife1Wait.className = "Wait";
  schleife1Div.id = "schleife1Id";
  schleife1Div.className = "hi";
  schleife1Div.appendChild(schleife1Text);
  schleife1Div.appendChild(schleife1Wait);
  messagesContainer.appendChild(schleife1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var schleife1Wait = document.getElementById('Loading');
    schleife1Wait.remove();
    schleife1Text.innerText = "algemeine tips zu dieses tehma";
  }, 2000
)
};
