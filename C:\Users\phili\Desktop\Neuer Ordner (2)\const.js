const prompts = [
   
    ["hallo", "hey", "servus", "guten morgen", "guten nachmittag", "guten abend", "guten vormittag", "guten mittag", "mahlzeit", "seas", "servas", "guten tag", "hi"],
    ["wie geht es dir", "wie ist dein leben"],
    ["was machst du gerade", "was is geht ab"],
    ["wie alt bist du"],
    ["hast du gut geschlaffen"],
    ["ich hasse dich"],
    ["wer bist du", "bist du ein mensch", "bist du ein bott", "bist du ein mensch oder ein bott"],
    ["wer hat dich erfunden ", "wer bist du"],
    ["dein name bitte", "dein name", "vieleicht weiß ich dein name", "was ist dein name", "wie nennt man dich"],
    ["ich liebe dich"],
    ["glücklich", "gut", "spaßig", "super", "super gut", "cool"],
    ["schlecht", "langweilig", "müde"],
    ["erzehl mir ein witz", "erzähl mir eine geschichte"],
    //["ah", "ja", "ok", "ok", "cool"],
    ["tschüss",  "tschau", "bis später"],
    ["was soll ich heute essen"],
    ["bro"],
    ["was", "warum", "wie", "wo", "wann"],
    ["nein","nicht sicher","vielleicht","nein danke"],
    //["haha","ha","lol","hehe","witzig"],
    ["wasssssss"],
    ["mein leben ist scheisse"],
    ["mir ist langweilig"],
    ["hast du gefühle"],
    ["ich bin muede"],
    ["ich will nicht"],
    ["willst du mich heiraten"],
    ["schlampe","hure","mutterficker"],
    ["was ist mein name", "wer bin ich"],
    ["auf welches geschlacht stehst du"],
    ["hast du hobbys", "was machst du gerene in deiner freizeit"],
    ["du bist scheisse"]
  ]
  
  // Possible responses, in corresponding order
  
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
    ["Sushi", "Pizza","Pizza Margherita","Chicken Nuggets","Cheeseburgers","Spaghetti Bolognese","Chicken Wings","Indisches Butter Chicken","Wraps","Lasagne","Halloumi Burgers","Schnitzel","Pokè Bowl","Acai Bowl","Phò","Falafel","Bibimbap","Lachs Sashimi","Frühlingsrollen","Couscous Salat","Dal","Vegetarische Reispfanne","Knuspriger Chicken Burger","Burritos","Udon","Mousaka","Pizza Crudo","Grünes Curry","Acht Schätze","Nasi Goreng","Spare Ribs","Paella","Chinesische Teigtaschen","California Roll","Satè Spieße","Knuspriger Halloumi","Bento Box","Hummus Dips","Bruschetta","Saganaki","Taboule","Empanadas","Brownie","Milchreis","Matcha Eis","Belgische Waffeln","Karrottenkuchen","Joghurt Bowl","Donuts","Exotischer Fruchtsalat","Tiramisu","Baklawa","Belegtes Baguette","Hot Dog","Chefsalat","Döner","Glasnudelsalat","Currywurst","Focaccia","Burrito","Chicken Curry","Gebratener Eierreis","Salat mit Hähnchenbrust oder Lachs","Spaghetti Vegetaria","Spaghetti Aglio e Olio","Tom Kha Gai Suppe","Sommerrollen","Sushi z.B. Sake Avocado Maki","Grünes oder rotes Curry mit Gemüse und Tofu","Schweinemedaillons mit Kräuterbutter und Backkartoffel","Falafelteller","Wraps mit Salat und Hühnerfleisch"],
    ["Bro!"],
    ["Gute Frage"],
    ["Das ist in Ordnung","Ich verstehe","Worüber willst du reden?"],
    //["Bitte sagen Sie etwas :("],
    ["?"],
    ["meins auch" ,"denk nicht an sowas "],
    ["erzähl mir was vielleicht ist dir dann nicht Langweilig", "mir auch"],
    ["nein habe ich nich"],
    ["geh schlafen"],
    ["dann schreib noch mit mir","dann geh scheissen"],
    ["ja aber wenn du den Pc herunterfährst ist schluss!","nein", "ie dich doch nicht"],
    ["sagt genau der richtige","Selber", "verpiss dich du nuttensohn"],
    ["keine ahnung"],
    ["Roboter"],
    ["mit dir schreiben mehr nicht", "nichts auser mit dir schreiben mehr kann ich ja nichts machen"],
    ["an kretik bitte an philippstoon @ gmail.com wenden"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Ich verstehe dich nicht :/",
    "Schreib ordentlich!!!",
  ]
  
  // Whatever else you want :)
  
  const coronavirus = [
    "Bitte desinfiziere dich mit einem Desinfektionsmittel"
    //"Bitte bleiben Sie wenn möglich Hause", 
    //"Eine Maske tragen", 
    //"Zum Glück habe ich kein COVID", 
    //"Es sind unsichere Zeiten"
  ]
  
  const danke = ["Gerne", "Kein Problem ;-)"]
