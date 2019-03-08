$(document).ready( function() {

  var flashCards = []
  var info = {}
  
  for (var i = 0; i < flashCards.length)

  $("#list").on("click", function(event) {
    var item = event.target.tagName
    var stuff = event.target.innertext
    card
    if (item === "LI") {
      $("#test").text(stuff.innerText)
      info.front = stuff
    } else {
      $("#test").text("It Doesnt Work")
    }
  })

  
  
});