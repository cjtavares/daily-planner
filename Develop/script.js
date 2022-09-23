$("#currentDay").text(moment().format("dddd, MMMM Do"));

var currentTime = (moment().format("HH"));

console.log(typeof currentTime)



for(var i = 9; i < 18; i++){
    var backgroundChange = document.getElementById(i)
    if(i > parseInt(currentTime)){
        backgroundChange.style.backgroundColor = "green";
    } else if
        (i == parseInt(currentTime)){
            backgroundChange.style.backgroundColor = "red";
    }else{
        backgroundChange.style.backgroundColor = "grey";
    }
}


    
var summitTodo = document.getElementById("btn9");
summitTodo.addEventListener("click", function(event) {
    var todo1 = document.getElementById("9")
         event.preventDefault();
         
         var todoText = todo1.value;
         
            
            
        localStorage.setItem("todo", todoText);
             
})
var todo1 = document.getElementById("9")
var todo9 = localStorage.getItem("todo");
console.log(todo1, todo9)
todo1.value = todo9;