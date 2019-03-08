$(document).ready( function() {

  var flashCards = [{front: "Function", back: "A block of code that does a specific task"}, {front: "Class", back: "Code that defines an object"}]
  var flag = false

  flashCards.forEach( function(char) {
    var li = '<li class="list-group-item item">' + char.front + '</li>'
    $('#list').append(li)
  });


  $("#list").on("click", function(event) {

    let item = event.target.tagName
    console.log(item)
    let stuff = event.target.innerText
    if (item === "LI") {
      flashCards.filter( function(name){
        if(name.front === stuff){

          $("#test").text(name.front)
        }
      })
    } else {
      $("#test").text("It Doesnt Work")
    }
  })

  $(document).on('click', "#post", function() {
    let s = test.innerText
    flashCards.filter( function(name){
      if(name.front === s){
        $("#test").text(name.back)
      }
    })
  })
  
});