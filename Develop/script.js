$("#currentDay").text(moment().format("dddd, MMMM Do"));

var currentTime = (moment().format("HH"));

console.log(typeof currentTime)



for(var i = 9; i < 18; i++){
    var backgroundChange = document.getElementById(i)
    if(i > parseInt(currentTime)){
        backgroundChange.style.backgroundColor = "#77dd77";
    } else if
        (i == parseInt(currentTime)){
            backgroundChange.style.backgroundColor = '#ff6961';
    }else{
        backgroundChange.style.backgroundColor = '#d3d3d3';
    }
}



var summitTodo = document.getElementById("btn9");
console.log(summitTodo)
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("9")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour9", todoText);           
})

var todo1 = document.getElementById("9")
var todo9 = localStorage.getItem("todoHour9");
todo1.value = todo9;


var summitTodo = document.getElementById("btn10");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("10")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour10", todoText);            
})
var todo2 = document.getElementById("10")
var todo10 = localStorage.getItem("todoHour10");
todo2.value = todo10;

var summitTodo = document.getElementById("btn11");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("11")
         event.preventDefault();
         
         var todoText = todo.value;
          
        localStorage.setItem("todoHour11", todoText);             
})
var todo3 = document.getElementById("11")
var todo11 = localStorage.getItem("todoHour11");
todo3.value = todo11;

var summitTodo = document.getElementById("btn12");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("12")
         event.preventDefault();
         
         var todoText = todo.value;
             
        localStorage.setItem("todoHour12", todoText);             
})
var todo4 = document.getElementById("12")
var todo12 = localStorage.getItem("todoHour12");
todo4.value = todo12;

var summitTodo = document.getElementById("btn13");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("13")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour13", todoText);          
})
var todo5 = document.getElementById("13")
var todo13 = localStorage.getItem("todoHour13");
todo5.value = todo13;

var summitTodo = document.getElementById("btn14");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("14")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour14", todoText);          
})
var todo6 = document.getElementById("14")
var todo14 = localStorage.getItem("todoHour14");
todo6.value = todo14;

var summitTodo = document.getElementById("btn15");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("15")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour15", todoText);          
})
var todo7 = document.getElementById("15")
var todo15 = localStorage.getItem("todoHour15");
todo7.value = todo15;

var summitTodo = document.getElementById("btn16");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("16")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour16", todoText);          
})
var todo8 = document.getElementById("16")
var todo16 = localStorage.getItem("todoHour16");
todo8.value = todo16;

var summitTodo = document.getElementById("btn17");
summitTodo.addEventListener("click", function(event) {
    var todo = document.getElementById("17")
         event.preventDefault();
         
         var todoText = todo.value;
         
        localStorage.setItem("todoHour17", todoText);          
})
var todo9 = document.getElementById("17")
var todo17 = localStorage.getItem("todoHour17");
todo9.value = todo17;