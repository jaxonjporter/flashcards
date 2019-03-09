$(document).ready( function() {
  
  var flag = true
  var flashCards = [{front: "Function", back: "A block of code that does a specific task"}, {front: "Computer", back: "I really hope you know what a computer is"}, {front: "Phone", back: "A communication device"}]
 

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
          flag = false
        }
      })
    } else {
      $("#test").text("It Doesnt Work")
    }
  })


  $(document).on('click', "#post", function() {
    let s = test.innerText
    flashCards.filter( function(name){
      if (flag === false){
        if(name.front === s){
          $("#test").text(name.back)
          flag = true
        }
      } else if (flag === true){
          if(name.back === s){
            $("#test").text(name.front)
            flag = false
          }
        }
    })
  })
  
});