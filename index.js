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
  
    let text = input.toLowerCase().trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/bitte /g, "")
      .replace(/ bitte/g, "")
      .replace(/ bitte /g, " ")
      .replace(/r u/g, "are you")
      .replace(/ gehts /g, " geht ")
      .replace(/ geht es /g, " geht ")
      .replace(/ä/g, "ae")
      .replace(/ü/g, "ue")
      .replace(/ö/g, "oe")
      .replace(/ß/g, "ss")
      .replace(/der /g, "")
      .replace(/ der /g, " ")
      .replace(/die /g, "")
      .replace(/ die /g, " ")
      .replace(/ das /g, " ")
      .replace(/das /g, "")
      .replace(/ ein /g, " ")
      .replace(/ein /g, "")
      .replace(/ eine /g, " ")
      .replace(/eine /g, "")
      .replace(/ einen /g, " ")
      .replace(/einen /g, "")
      .replace(/ deine /g, " ")
      .replace(/deine /g, "")
      .replace(/dein /g, "")
      .replace(/ dein /g, " ")
      .replace(/er /g, "")
      .replace(/ er /g, " ")
      .replace(/sie /g, "")
      .replace(/ sie /g, " ")
      .replace(/es /g, "")
      .replace(/ es /g, " ");
  

    if (text.match(/deepfakes/gi)) {
      product = deepfakes[Math.floor(Math.random() * deepfakes.length)];
    } else if (text.match(/fake news/gi)) {
      product = fakenews[Math.floor(Math.random() * fakenews.length)];
    } else if (text.match(/scherz|satire/gi)) {
      product = scherz[Math.floor(Math.random() * scherz.length)];
    } else if (text.match(/phishing|betrug/gi)) {
      product = betrug[Math.floor(Math.random() * betrug.length)];
    } else if (text.match(/manipulat/gi)) {
      product = mani[Math.floor(Math.random() * mani.length)];
    } else if (text.match(/gab|damals/gi)) {
      product = gab[Math.floor(Math.random() * gab.length)];
    } else if (text.match(/hass|hetze|mobbing|boes/gi)) {
      product = boes[Math.floor(Math.random() * boes.length)];
    } else if (text.match(/medien|zeitungen/gi)) {
      product = medien[Math.floor(Math.random() * medien.length)];
    } else if (text.match(/tun|machen/gi)) {
      product = tun[Math.floor(Math.random() * tun.length)];
    } else if (text.match(/erkenn/gi)) {
      product = erkennen[Math.floor(Math.random() * erkennen.length)];
    } else if (text.match(/glauben|teilen|umfeld/gi)) {
      product = glauben[Math.floor(Math.random() * glauben.length)];
    } else if (text.match(/gefaehrlich|gefahr/gi)) {
      product = gefahr[Math.floor(Math.random() * gefahr.length)];
    } else if (text.match(/arten/gi)) {
      product = arten[Math.floor(Math.random() * arten.length)];
    } else if(compare(prompts, replies, text)) { 
      product = compare(prompts, replies, text);
    } else if (text.match(/danke/gi)) {
      product = danke[Math.floor(Math.random() * danke.length)];
    } else if (text.match(/(corona|covid|virus)/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
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
          break;
        }
      }
      if (replyFound) {
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
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    setTimeout(() => {
      var botWait = document.getElementById('Loading');
      botWait.remove();
      botText.innerText = `${product}`;
      botDiv.onclick = awfld();
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

  function wsfn() {
    const messagesContainer = document.getElementById("messages");

    let wsfn1Div = document.createElement("div");
    let wsfn1Text = document.createElement("div");
    wsfn1Div.id = "wsfn1";
    wsfn1Div.className = "hi2";
    wsfn1Text.innerText = "Was sind Fake News?";
    wsfn1Div.appendChild(wsfn1Text);
    messagesContainer.appendChild(wsfn1Div);
    let wsfn2Div = document.createElement("div");
    let wsfn2Wait = document.createElement("div");
    let wsfn2Text = document.createElement("div");
    wsfn2Wait.id = "Loading";
    wsfn2Wait.className = "Wait";
    wsfn2Div.id = "wsfn2";
    wsfn2Div.className = "hi";
    wsfn2Div.appendChild(wsfn2Text);
    wsfn2Div.appendChild(wsfn2Wait);
    messagesContainer.appendChild(wsfn2Div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
      var wsfn2Wait = document.getElementById('Loading');
      wsfn2Wait.remove();
      wsfn2Text.innerText = 'Unter Fake News hat man ursprünglich nur falsche Informationen verstanden, die mit der Absicht, andere zu beeinflussen, verbreitet wurden und wie "echte" Nachrichten ausgesehen haben. Um eine möglichst große Masse von Menschen zu erreichen, setzen die Verfasser*innen solcher Meldungen auf sehr reißerische und schockierende Formulierungen, die zum Teilen und Liken verleiten sollen. Meistens waren das Informationen, die dazu dienten, eine bestimmte politische Richtung zu unterstützen.';
      messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
      wsfn2Div.onclick = awfld();
    }, 2000
  )
};

function wavfge() {
  const messagesContainer = document.getElementById("messages");

  let wavfge2Div = document.createElement("div");
  let wavfge2Text = document.createElement("div");
  wavfge2Div.id = "wavfge2";
  wavfge2Div.className = "hi2";
  wavfge2Text.innerText = "Welche Arten von Falschmeldungen gibt es?";
  wavfge2Div.appendChild(wavfge2Text);
  messagesContainer.appendChild(wavfge2Div);
  let wavfge1Div = document.createElement("div");
  let wavfge1Wait = document.createElement("div");
  let wavfge1Text = document.createElement("div");
  let button1Div = document.createElement("div");
  let button2Div = document.createElement("div");
  let button3Div = document.createElement("div");
  let button4Div = document.createElement("div");
  wavfge1Wait.id = "Loading";
  wavfge1Wait.className = "Wait";
  wavfge1Div.id = "wavfge1";
  wavfge1Div.className = "hi";
  wavfge1Div.appendChild(wavfge1Text);
  wavfge1Div.appendChild(wavfge1Wait);
  wavfge1Div.appendChild(button1Div);
  wavfge1Div.appendChild(button2Div);
  wavfge1Div.appendChild(button3Div);
  wavfge1Div.appendChild(button4Div);
  messagesContainer.appendChild(wavfge1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var wavfge1Wait = document.getElementById('Loading');
    wavfge1Wait.remove();
    wavfge1Text.innerText = "Man unterscheidet in folgende Arten:";
    button1Div.innerHTML = '<button type="button" title="Senden" onclick="sos()">Scherz- oder Satiremeldungen</>';
    button2Div.innerHTML = '<button type="button" title="Senden" onclick="pub()">Phishing- und Betrugsmeldungen</>';
    button3Div.innerHTML = '<button type="button" title="Senden" onclick="gmf()">Gezielt manipulative Falschmeldungen</>';
    button4Div.innerHTML = '<button type="button" title="Senden" onclick="hhomuabm()">Hass, Hetze oder Mobbing und andere bösartige Meldungen</>';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    //wavfge1Div.onclick = awfld();
  }, 2000
)
};

function sedaibmuzfnvw() {
  const messagesContainer = document.getElementById("messages");

  let sedaibmuzfnvw2Div = document.createElement("div");
  let sedaibmuzfnvw2Text = document.createElement("div");
  sedaibmuzfnvw2Div.id = "sedaibmuzfnvw2";
  sedaibmuzfnvw2Div.className = "hi2";
  sedaibmuzfnvw2Text.innerText = "Stimmt es, dass auch in bekannten Medien und Zeitungen Fake News verbreitet werden?";
  sedaibmuzfnvw2Div.appendChild(sedaibmuzfnvw2Text);
  messagesContainer.appendChild(sedaibmuzfnvw2Div);
  let sedaibmuzfnvw1Div = document.createElement("div");
  let sedaibmuzfnvw1Wait = document.createElement("div");
  let sedaibmuzfnvw1Text = document.createElement("div");
  sedaibmuzfnvw1Wait.id = "Loading";
  sedaibmuzfnvw1Wait.className = "Wait";
  sedaibmuzfnvw1Div.id = "sedaibmuzfnvw1";
  sedaibmuzfnvw1Div.className = "hi";
  sedaibmuzfnvw1Div.appendChild(sedaibmuzfnvw1Text);
  sedaibmuzfnvw1Div.appendChild(sedaibmuzfnvw1Wait);
  messagesContainer.appendChild(sedaibmuzfnvw1Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var sedaibmuzfnvw1Wait = document.getElementById('Loading');
    sedaibmuzfnvw1Wait.remove();
    sedaibmuzfnvw1Text.innerText = 'Zeitungen und andere große Medien erfüllen eine wichtige Aufgabe in der Gesellschaft. Seriöse Medien stehen normalerweise auch zu diesen Fehlern und stellen sie so schnell wie möglich richtig. Bekannte Medien arbeiten mit vielen Mitarbeiter*innen in großen Redaktionen. Dort werden Artikel vor Veröffentlichung von mehreren Personen gelesen und überprüft, was dazu führt, dass Fehler in der Regel noch vor Veröffentlichung bemerkt werden. Seriöse Medien halten sich an die Grundsätze des Medienrechts und holen auch Stellungnahmen der von ihren Berichten betroffenen Personen ein. Solche Prozesse sind aufwändig und kosten viel Geld, weshalb seriöse, bekannte Medien oft nur gegen Bezahlung zu lesen sind.';
    sedaibmuzfnvw1Div.onclick = awfld();
  }, 2000
)
};

function awfld() {
  const messagesContainer = document.getElementById("messages");

  let awfldDiv = document.createElement("div");
  let awfldWait = document.createElement("div");
  let awfldText = document.createElement("div");
  let button1Div = document.createElement("div");
  let button2Div = document.createElement("div");
  let button3Div = document.createElement("div");
  let button4Div = document.createElement("div");
  let button5Div = document.createElement("div");
  let button6Div = document.createElement("div");
  let button7Div = document.createElement("div");
  let button8Div = document.createElement("div");
  let button9Div = document.createElement("div");
  awfldWait.id = "Loading";
  awfldWait.className = "Wait";
  awfldDiv.id = "ETCS";
  awfldDiv.className = "hi";
  awfldDiv.appendChild(awfldText);
  awfldDiv.appendChild(awfldWait);
  awfldDiv.appendChild(button1Div);
  awfldDiv.appendChild(button2Div);
  awfldDiv.appendChild(button3Div);
  awfldDiv.appendChild(button4Div);
  awfldDiv.appendChild(button5Div);
  awfldDiv.appendChild(button6Div);
  awfldDiv.appendChild(button7Div);
  awfldDiv.appendChild(button8Div);
  awfldDiv.appendChild(button9Div);
  messagesContainer.appendChild(awfldDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var awfldWait = document.getElementById('Loading');
    awfldWait.remove();
    awfldText.innerText = "Was wollen Sie wissen?";
    button1Div.innerHTML = '<button type="button" title="Senden" onclick="wsfn()">Was sind Fake News?</>';
    button2Div.innerHTML = '<button type="button" title="Senden" onclick="wavfge()">Welche Arten von Falschmeldungen gibt es?</>';
    button3Div.innerHTML = '<button type="button" title="Senden" onclick="sedaibmuzfnvw()">Stimmt es, dass auch in bekannten Medien und Zeitungen Fake News verbreitet werden?</>';
    button4Div.innerHTML = '<button type="button" title="Senden" onclick="sfng()">Sind Fake News gefährlich?</button>';
    button5Div.innerHTML = '<button type="button" title="Senden" onclick="wiewfnze()">Warum ist es wichtig, Fake News zu erkennen?</button>';
    button6Div.innerHTML = '<button type="button" title="Senden" onclick="wkigfnt()">Was kann ich gegen Fake News tun?</button>';
    button7Div.innerHTML = '<button type="button" title="Senden" onclick="pimugutfnwsit()">Personen in meinem Umfeld glauben und teilen Fake News. Was soll ich tun?</button>';
    button8Div.innerHTML = '<button type="button" title="Senden" onclick="wsd()">Was sind Deepfakes?</button>';
    button9Div.innerHTML = '<button type="button" title="Senden" onclick="gefnsvdi()">Gab es Fake News schon vor dem Internet?</button>';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  }, 2000
)
};

function sos() {
  const messagesContainer = document.getElementById("messages");

  let sos1Div = document.createElement("div");
  let sos1Text = document.createElement("div");
  sos1Div.id = "sos1";
  sos1Div.className = "hi2";
  sos1Text.innerText = "Scherz- oder Satiremeldungen";
  sos1Div.appendChild(sos1Text);
  messagesContainer.appendChild(sos1Div);
  let sos2Div = document.createElement("div");
  let sos2Wait = document.createElement("div");
  let sos2Text = document.createElement("div");
  sos2Wait.id = "Loading";
  sos2Wait.className = "Wait";
  sos2Div.id = "sos2";
  sos2Div.className = "hi";
  sos2Div.appendChild(sos2Text);
  sos2Div.appendChild(sos2Wait);
  messagesContainer.appendChild(sos2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var sos2Wait = document.getElementById('Loading');
    sos2Wait.remove();
    sos2Text.innerText = 'Darunter fallen sowohl satirische "Scherznachrichten" (wie die der "Tagespresse") oder aber auch bloße Gerüchte (etwa über prominente Personen). Diese Meldungen können für Betroffene sehr unangenehm sein, haben jedoch nicht den Zweck, andere Menschen zu beeinflussen.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    sos2Div.onclick = awfld();
  }, 2000
)
};

function pub() {
  const messagesContainer = document.getElementById("messages");

  let pub1Div = document.createElement("div");
  let pub1Text = document.createElement("div");
  pub1Div.id = "pub1";
  pub1Div.className = "hi2";
  pub1Text.innerText = "Phishing- und Betrugsmeldungen";
  pub1Div.appendChild(pub1Text);
  messagesContainer.appendChild(pub1Div);
  let pub2Div = document.createElement("div");
  let pub2Wait = document.createElement("div");
  let pub2Text = document.createElement("div");
  pub2Wait.id = "Loading";
  pub2Wait.className = "Wait";
  pub2Div.id = "pub2";
  pub2Div.className = "hi";
  pub2Div.appendChild(pub2Text);
  pub2Div.appendChild(pub2Wait);
  messagesContainer.appendChild(pub2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var pub2Wait = document.getElementById('Loading');
    pub2Wait.remove();
    pub2Text.innerText = 'Nutzer*innen sollen verleitet werden, auf einen Link zu klicken und eventuell persönliche Daten anzugeben. Sogenanntes Phishing kann erheblichen (finanziellen) Schaden verursachen. Es ist deshalb sehr wichtig zu prüfen, ob eine Nachricht mit Link vertrauenswürdig ist.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    pub2Div.onclick = awfld();
  }, 2000
)
};

function gmf() {
  const messagesContainer = document.getElementById("messages");

  let gmf1Div = document.createElement("div");
  let gmf1Text = document.createElement("div");
  gmf1Div.id = "gmf1";
  gmf1Div.className = "hi2";
  gmf1Text.innerText = "Gezielt manipulative Falschmeldungen"
  gmf1Div.appendChild(gmf1Text);
  messagesContainer.appendChild(gmf1Div);
  let gmf2Div = document.createElement("div");
  let gmf2Wait = document.createElement("div");
  let gmf2Text = document.createElement("div");
  gmf2Wait.id = "Loading";
  gmf2Wait.className = "Wait";
  gmf2Div.id = "gmf2";
  gmf2Div.className = "hi";
  gmf2Div.appendChild(gmf2Text);
  gmf2Div.appendChild(gmf2Wait);
  messagesContainer.appendChild(gmf2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var gmf2Wait = document.getElementById('Loading');
    gmf2Wait.remove();
    gmf2Text.innerText = 'Solche Nachrichten sollen die Meinung der Leser*innen gezielt beeinflussen und sie beispielsweise von bestimmten politischen Zielen überzeugen. Verfasser*innen solcher Nachrichten bedienen sich oft echter Nachrichten und stellen diese verkürzt oder unrichtig dar. Es werden zum Beispiel wichtige Informationen bewusst weggelassen.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    gmf2Div.onclick = awfld();
  }, 2000
)
};

function hhomuabm() {
  const messagesContainer = document.getElementById("messages");

  let hhomuabm1Div = document.createElement("div");
  let hhomuabm1Text = document.createElement("div");
  hhomuabm1Div.id = "hhomuabm1";
  hhomuabm1Div.className = "hi2";
  hhomuabm1Text.innerText = "Hass, Hetze oder Mobbing und andere bösartige Meldungen";
  hhomuabm1Div.appendChild(hhomuabm1Text);
  messagesContainer.appendChild(hhomuabm1Div);
  let hhomuabm2Div = document.createElement("div");
  let hhomuabm2Wait = document.createElement("div");
  let hhomuabm2Text = document.createElement("div");
  hhomuabm2Wait.id = "Loading";
  hhomuabm2Wait.className = "Wait";
  hhomuabm2Div.id = "hhomuabm2";
  hhomuabm2Div.className = "hi";
  hhomuabm2Div.appendChild(hhomuabm2Text);
  hhomuabm2Div.appendChild(hhomuabm2Wait);
  messagesContainer.appendChild(hhomuabm2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var hhomuabm2Wait = document.getElementById('Loading');
    hhomuabm2Wait.remove();
    hhomuabm2Text.innerText = 'In den letzten Jahren ist es in Sozialen Medien verstärkt zu Hass und Hetze gegen einzelne Personen oder ganze Gruppen gekommen. Zu solchen Zwecken werden oft falsche Informationen gestreut, also Fake News verwendet. Solche Meldungen sind oft sogar strafrechtlich relevant, auch Mobbing kann in Österreich strafbar sein.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    hhomuabm2Div.onclick = awfld();
  }, 2000
)
};

function sfng() {
  const messagesContainer = document.getElementById("messages");

  let sfng1Div = document.createElement("div");
  let sfng1Text = document.createElement("div");
  sfng1Div.id = "sfng1";
  sfng1Div.className = "hi2";
  sfng1Text.innerText = "Sind Fake News gefährlich?";
  sfng1Div.appendChild(sfng1Text);
  messagesContainer.appendChild(sfng1Div);
  let sfng2Div = document.createElement("div");
  let sfng2Wait = document.createElement("div");
  let sfng2Text = document.createElement("div");
  sfng2Wait.id = "Loading";
  sfng2Wait.className = "Wait";
  sfng2Div.id = "sfng2";
  sfng2Div.className = "hi";
  sfng2Div.appendChild(sfng2Text);
  sfng2Div.appendChild(sfng2Wait);
  messagesContainer.appendChild(sfng2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var sfng2Wait = document.getElementById('Loading');
    sfng2Wait.remove();
    sfng2Text.innerText = 'Fake News können für jeden Einzelnen gefährlich sein, sie können aber auch für die gesamte Gesellschaft eine Gefahr darstellen. Dadurch können ernsthafte Probleme im Zusammenleben entstehen und sogar Freundeskreise oder Familien zerbrechen.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    sfng2Div.onclick = awfld();
  }, 2000
)
};

function wiewfnze() {
  const messagesContainer = document.getElementById("messages");

  let wiewfnze1Div = document.createElement("div");
  let wiewfnze1Text = document.createElement("div");
  wiewfnze1Div.id = "wiewfnze1";
  wiewfnze1Div.className = "hi2";
  wiewfnze1Text.innerText = "Warum ist es wichtig, Fake News zu erkennen?";
  wiewfnze1Div.appendChild(wiewfnze1Text);
  messagesContainer.appendChild(wiewfnze1Div);
  let wiewfnze2Div = document.createElement("div");
  let wiewfnze2Wait = document.createElement("div");
  let wiewfnze2Text = document.createElement("div");
  wiewfnze2Wait.id = "Loading";
  wiewfnze2Wait.className = "Wait";
  wiewfnze2Div.id = "wiewfnze2";
  wiewfnze2Div.className = "hi";
  wiewfnze2Div.appendChild(wiewfnze2Text);
  wiewfnze2Div.appendChild(wiewfnze2Wait);
  messagesContainer.appendChild(wiewfnze2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var wiewfnze2Wait = document.getElementById('Loading');
    wiewfnze2Wait.remove();
    wiewfnze2Text.innerText = 'Fake News können ihre negative Wirkung besonders dann entfalten, wenn sie sich weit verbreiten. Die Sozialen Medien sind so aufgebaut, dass Beiträge, die häufig kommentiert, geliked oder geteilt werden, bei immer mehr Menschen auftauchen. Dadurch können sich Fake News rasend schnell, also «viral», unter vielen Menschen verbreiten.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    wiewfnze2Div.onclick = awfld();
  }, 2000
)
};

function wkigfnt() {
  const messagesContainer = document.getElementById("messages");

  let wkigfntawkimw1Div = document.createElement("div");
  let wkigfntawkimw1Text = document.createElement("div");
  wkigfntawkimw1Div.id = "wkigfnt1";
  wkigfntawkimw1Div.className = "hi2";
  wkigfntawkimw1Text.innerText = "Was kann ich gegen Fake News tun?";
  wkigfntawkimw1Div.appendChild(wkigfntawkimw1Text);
  messagesContainer.appendChild(wkigfntawkimw1Div);
  let wkigfntawkimw2Div = document.createElement("div");
  let wkigfntawkimw2Wait = document.createElement("div");
  let wkigfntawkimw2Text = document.createElement("div");
  wkigfntawkimw2Wait.id = "Loading";
  wkigfntawkimw2Wait.className = "Wait";
  wkigfntawkimw2Div.id = "wkigfnt2";
  wkigfntawkimw2Div.className = "hi";
  wkigfntawkimw2Div.appendChild(wkigfntawkimw2Text);
  wkigfntawkimw2Div.appendChild(wkigfntawkimw2Wait);
  messagesContainer.appendChild(wkigfntawkimw2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var wkigfntawkimw2Wait = document.getElementById('Loading');
    wkigfntawkimw2Wait.remove();
    wkigfntawkimw2Text.innerText = 'Am wichtigsten ist, dass du nicht zur Verbreitung von Fake News beiträgst. Das bedeutet, Fake News nicht zu kommentieren, zu liken oder zu teilen.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    wkigfntawkimw2Div.onclick = awfld();
  }, 2000
)
};

function pimugutfnwsit() {
  const messagesContainer = document.getElementById("messages");

  let pimugutfnwsit1Div = document.createElement("div");
  let pimugutfnwsit1Text = document.createElement("div");
  pimugutfnwsit1Div.id = "pimugutfnwsit1";
  pimugutfnwsit1Div.className = "hi2";
  pimugutfnwsit1Text.innerText = "Personen in meinem Umfeld glauben und teilen Fake News. Was soll ich tun?";
  pimugutfnwsit1Div.appendChild(pimugutfnwsit1Text);
  messagesContainer.appendChild(pimugutfnwsit1Div);
  let pimugutfnwsit2Div = document.createElement("div");
  let pimugutfnwsit2Wait = document.createElement("div");
  let pimugutfnwsit2Text = document.createElement("div");
  pimugutfnwsit2Wait.id = "Loading";
  pimugutfnwsit2Wait.className = "Wait";
  pimugutfnwsit2Div.id = "pimugutfnwsit2";
  pimugutfnwsit2Div.className = "hi";
  pimugutfnwsit2Div.appendChild(pimugutfnwsit2Text);
  pimugutfnwsit2Div.appendChild(pimugutfnwsit2Wait);
  messagesContainer.appendChild(pimugutfnwsit2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var pimugutfnwsit2Wait = document.getElementById('Loading');
    pimugutfnwsit2Wait.remove();
    pimugutfnwsit2Text.innerText = 'Wenn du feststellst, dass jemand in deinem Umfeld problematische Inhalte wie Fake News verbreitet, dann kann es sinnvoll sein, diese Menschen darauf hinzuweisen. Bei einer Diskussion kann es außerdem helfen, den anderen nicht um jeden Preis mit Argumenten zu überwältigen';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    pimugutfnwsit2Div.onclick = awfld();
  }, 2000
)
};

function wsd() {
  const messagesContainer = document.getElementById("messages");

  let wsd1Div = document.createElement("div");
  let wsd1Text = document.createElement("div");
  wsd1Div.id = "wsd1";
  wsd1Div.className = "hi2";
  wsd1Text.innerText = "Was sind Deepfakes?";
  wsd1Div.appendChild(wsd1Text);
  messagesContainer.appendChild(wsd1Div);
  let wsd2Div = document.createElement("div");
  let wsd2Wait = document.createElement("div");
  let wsd2Text = document.createElement("div");
  wsd2Wait.id = "Loading";
  wsd2Wait.className = "Wait";
  wsd2Div.id = "wsd2";
  wsd2Div.className = "hi";
  wsd2Div.appendChild(wsd2Text);
  wsd2Div.appendChild(wsd2Wait);
  messagesContainer.appendChild(wsd2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var wsd2Wait = document.getElementById('Loading');
    wsd2Wait.remove();
    wsd2Text.innerText = 'Bei Deepfakes handelt es sich um gefälschte Bilder oder Videos, die täuschend echt aussehen. Deepfakes können beispielsweise dazu genutzt werden, Politiker*innen falsche Aussagen in den Mund zu legen. Beispiel: Du hast ein Video einer Politikerin gesehen, in dem diese schockierende Aussagen tätigt, die dir merkwürdig oder unglaubwürdig erscheinen? Dann solltest du nachsehen, ob diese Aussagen von einer offiziellen Stelle, wie der Pressestelle der Politikerin bestätigt wurden. ';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    wsd2Div.onclick = awfld();
  }, 2000
)
};

function gefnsvdi() {
  const messagesContainer = document.getElementById("messages");

  let gefnsvdi1Div = document.createElement("div");
  let gefnsvdi1Text = document.createElement("div");
  gefnsvdi1Div.id = "gefnsvdi1";
  gefnsvdi1Div.className = "hi2";
  gefnsvdi1Text.innerText = "Gab es Fake News schon vor dem Internet?";
  gefnsvdi1Div.appendChild(gefnsvdi1Text);
  messagesContainer.appendChild(gefnsvdi1Div);
  let gefnsvdi2Div = document.createElement("div");
  let gefnsvdi2Wait = document.createElement("div");
  let gefnsvdi2Text = document.createElement("div");
  gefnsvdi2Wait.id = "Loading";
  gefnsvdi2Wait.className = "Wait";
  gefnsvdi2Div.id = "gefnsvdi2";
  gefnsvdi2Div.className = "hi";
  gefnsvdi2Div.appendChild(gefnsvdi2Text);
  gefnsvdi2Div.appendChild(gefnsvdi2Wait);
  messagesContainer.appendChild(gefnsvdi2Div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    var gefnsvdi2Wait = document.getElementById('Loading');
    gefnsvdi2Wait.remove();
    gefnsvdi2Text.innerText = 'Absichtlich gestreute Falschinformationen, um politischen Gegner*innen oder Minderheiten zu schaden, existieren schon sehr lange. Neu sind jedoch die Methoden, mit denen Fake News verbreitet werden. Erst seit es das Internet und insbesondere die Sozialen Medien gibt, können sich Fake News in großer Zahl und in rasender Geschwindigkeit verbreiten. Dadurch haben sie sich zu einem ernsthaften Problem entwickelt.';
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    gefnsvdi2Div.onclick = awfld();
  }, 2000
)
};