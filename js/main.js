console.log("JS file connected");
//variables
//creatinga shortcut to fruits svgs in the DOM
const fruits = document.querySelectorAll("#fruits svg");
console.log(fruits);

//functions
function logId() {
    console.log(this.id);
}


fruits.forEach(game => game.addEventListener("click", logId));
