const prompts = [
   
    ["hallo", "hey", "servus", "guten morgen", "guten nachmittag", "guten abend", "guten vormittag", "guten mittag", "mahlzeit", "seas", "servas", "guten tag"],
    ["wie geht dir", "wie ist leben"],
    ["was machst du gerade", "was is geht ab"],
    ["wie alt bist du"],
    ["hast du gut geschlafen", "hast gut geschlafen", "hast geschlafen"],
    ["ich hasse dich"],
    ["bist du mensch", "bist du bott", "bist du mensch oder bott"],
    ["wer hat dich erfunden ", "wer bist du"],
    ["wie heisst du", "name", "vieleicht weiß ich name", "was ist name", "wie nennt man dich"],
    ["ich liebe dich", "love you", "lieb dich"],
    ["gluecklich", "gut", "spassig", "super", "super gut", "cool"],
    ["schlecht", "langweilig", "muede"],
    ["erzaehl mir witz", "erzaehl mir geschichte"],
    //["ah", "ja", "ok", "ok", "cool"],
    ["tschuess",  "tschau", "bis spaeter"],
    ["was soll ich heute essen"],
    ["bro"],
    ["was", "warum", "wie", "wo", "wann"],
    ["nein","nicht sicher","vielleicht","nein danke"],
    //["haha","ha","lol","hehe","witzig"],
    ["wasssssss"]
  ]

  
  const replies = [
    ["Hallo!", "Hey!", "Servus!", "Hi!", "Griaß di!", "Grüß Gott!"],
    ["gut wie geht es dir", "Ziemlich gut, und dir?", "super, und dir?", "schlecht dir"],
    ["nich viel", "kurz vorm schlafen gehen", "kannst du fragen?", "Ich weiß es nicht genau"],
    ["16"],
    ["ja"],
    ["ich dich auch", "ich dich noch mehr"],
    ["Ich bin ein Bot. Was machst"],
    ["Der einzig wahre Gott, JavaScript"],
    ["Ich bin namenlos", "Ich habe keinen Namen"],
    ["Ich liebe dich auch", "Ich auch",],
    ["Hast du dich jemals schlecht gefühlt?", "Froh, es zu hören"],
    ["Warum?", "Warum? Du solltest nicht!", "Versuche fernzusehen", "Am Ende wird alles gut werden und wenn es noch nicht gut ist, dann ist es noch nicht am Ende."],
    ["Was ist mit?", "Es war einmal..."],
    //["Erzähl mir eine Geschichte", "Erzähl mir einen Witz", "Erzähl mir von dir"],
    ["Tschüss", "Auf Wiedersehen", "Bis später"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Gute Frage"],
    ["Das ist in Ordnung","Ich verstehe","Worüber willst du reden?"],
    //["Bitte sagen Sie etwas :("],
    ["?"]
  ]
  
  
  const alternative = [
    "Ich verstehe dich nicht :/",
    "Schreib ordentlich!!!",
  ]
  
  
  const coronavirus = [
    "Bitte desinfiziere dich mit einem Desinfektionsmittel",
    "Bitte bleiben Sie wenn möglich Hause"
    //"Eine Maske tragen", 
    //"Zum Glück habe ich kein COVID", 
    //"Es sind unsichere Zeiten"
  ]
  
  const danke = ["Gerne", "Kein Problem ;-)"]
  
  const deepfakes =["Bei Deepfakes handelt es sich um gefälschte Bilder oder Videos, die täuschend echt aussehen. Deepfakes können beispielsweise dazu genutzt werden, Politiker*innen falsche Aussagen in den Mund zu legen. Beispiel: Du hast ein Video einer Politikerin gesehen, in dem diese schockierende Aussagen tätigt, die dir merkwürdig oder unglaubwürdig erscheinen? Dann solltest du nachsehen, ob diese Aussagen von einer offiziellen Stelle, wie der Pressestelle der Politikerin bestätigt wurden."]
  
  const fakenews =['Unter Fake News hat man ursprünglich nur falsche Informationen verstanden, die mit der Absicht, andere zu beeinflussen, verbreitet wurden und wie "echte" Nachrichten ausgesehen haben. Um eine möglichst große Masse von Menschen zu erreichen, setzen die Verfasser*innen solcher Meldungen auf sehr reißerische und schockierende Formulierungen, die zum Teilen und Liken verleiten sollen. Meistens waren das Informationen, die dazu dienten, eine bestimmte politische Richtung zu unterstützen.']
  
  const medien =["Zeitungen und andere große Medien erfüllen eine wichtige Aufgabe in der Gesellschaft. Seriöse Medien stehen normalerweise auch zu diesen Fehlern und stellen sie so schnell wie möglich richtig. Bekannte Medien arbeiten mit vielen Mitarbeiter*innen in großen Redaktionen. Dort werden Artikel vor Veröffentlichung von mehreren Personen gelesen und überprüft, was dazu führt, dass Fehler in der Regel noch vor Veröffentlichung bemerkt werden. Seriöse Medien halten sich an die Grundsätze des Medienrechts und holen auch Stellungnahmen der von ihren Berichten betroffenen Personen ein. Solche Prozesse sind aufwändig und kosten viel Geld, weshalb seriöse, bekannte Medien oft nur gegen Bezahlung zu lesen sind."]

  const scherz = ['Darunter fallen sowohl satirische "Scherznachrichten" (wie die der "Tagespresse") oder aber auch bloße Gerüchte (etwa über prominente Personen). Diese Meldungen können für Betroffene sehr unangenehm sein, haben jedoch nicht den Zweck, andere Menschen zu beeinflussen.']

  const betrug = ['Nutzer*innen sollen verleitet werden, auf einen Link zu klicken und eventuell persönliche Daten anzugeben. Sogenanntes Phishing kann erheblichen (finanziellen) Schaden verursachen. Es ist deshalb sehr wichtig zu prüfen, ob eine Nachricht mit Link vertrauenswürdig ist.']

  const mani = ['Solche Nachrichten sollen die Meinung der Leser*innen gezielt beeinflussen und sie beispielsweise von bestimmten politischen Zielen überzeugen. Verfasser*innen solcher Nachrichten bedienen sich oft echter Nachrichten und stellen diese verkürzt oder unrichtig dar. Es werden zum Beispiel wichtige Informationen bewusst weggelassen.']

  const gefahr = ['Fake News können für jeden Einzelnen gefährlich sein, sie können aber auch für die gesamte Gesellschaft eine Gefahr darstellen. Dadurch können ernsthafte Probleme im Zusammenleben entstehen und sogar Freundeskreise oder Familien zerbrechen.']
  
  const boes = ['In den letzten Jahren ist es in Sozialen Medien verstärkt zu Hass und Hetze gegen einzelne Personen oder ganze Gruppen gekommen. Zu solchen Zwecken werden oft falsche Informationen gestreut, also Fake News verwendet. Solche Meldungen sind oft sogar strafrechtlich relevant, auch Mobbing kann in Österreich strafbar sein.']

  const tun = ['Am wichtigsten ist, dass du nicht zur Verbreitung von Fake News beiträgst. Das bedeutet, Fake News nicht zu kommentieren, zu liken oder zu teilen.']

  const erkennen = ['Fake News können ihre negative Wirkung besonders dann entfalten, wenn sie sich weit verbreiten. Die Sozialen Medien sind so aufgebaut, dass Beiträge, die häufig kommentiert, geliked oder geteilt werden, bei immer mehr Menschen auftauchen. Dadurch können sich Fake News rasend schnell, also «viral», unter vielen Menschen verbreiten.']

  const glauben = ['Wenn du feststellst, dass jemand in deinem Umfeld problematische Inhalte wie Fake News verbreitet, dann kann es sinnvoll sein, diese Menschen darauf hinzuweisen. Bei einer Diskussion kann es außerdem helfen, den anderen nicht um jeden Preis mit Argumenten zu überwältigen']

  const gab = ['Absichtlich gestreute Falschinformationen, um politischen Gegner*innen oder Minderheiten zu schaden, existieren schon sehr lange. Neu sind jedoch die Methoden, mit denen Fake News verbreitet werden. Erst seit es das Internet und insbesondere die Sozialen Medien gibt, können sich Fake News in großer Zahl und in rasender Geschwindigkeit verbreiten. Dadurch haben sie sich zu einem ernsthaften Problem entwickelt.']