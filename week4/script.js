(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
  
    var name_sel = names[i];
    var firstLetter = name_sel.charAt(0).toLowerCase();
  
    if (firstLetter === "j") {
      byeSpeaker.speak(name_sel);
    } else {
      helloSpeaker.speak(name_sel);
    }
  }
})(window);


