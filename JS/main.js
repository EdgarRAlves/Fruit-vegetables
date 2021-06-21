var cards = document.getElementsByClassName("card");
var btn = document.getElementById ("btn")

var manoforma = document.forms["input"];

manoforma.addEventListener("submit", function(e) {
    e.preventDefault();
var input = manoforma["input2"].value.toLowerCase();
console.log(input);
    for (var i=0; i < cards.length; i++ ){
        var id = cards[i].getAttribute("id");
        cards[i].classList.remove("hide"); 
        if (input == id){
            cards[i].classList.add("show");   
        } else{
            cards[i].classList.add("hide"); 
        }
    }
})

var fruits = document.getElementsByClassName("fruits");
var vegetables = document.getElementsByClassName("vegetables");

var select = document.getElementById("select");
select.addEventListener("change", function() {
   if (select.value == "fruits"){
   for (var i=0; i < fruits.length; i++ ){
    fruits[i].classList.remove("hide"); 
    vegetables[i].classList.remove("hide"); 
       fruits[i].classList.add("show");
   }
   for (var i=0; i < vegetables.length; i++){
       vegetables[i].classList.add("hide"); 
   } } else {
    for (var i=0; i < fruits.length; i++ ){
        fruits[i].classList.remove("hide"); 
        vegetables[i].classList.remove("hide"); 
    
        fruits[i].classList.add("hide");
    }
    for (var i=0; i < vegetables.length; i++){
        vegetables[i].classList.add("show"); 
   }
   }

})
