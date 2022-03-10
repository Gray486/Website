var maxNum
var numberNumber = 0
var list
var number
function start() {
    maxNum = window.prompt("Maximum number");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function nextNumber() {
if(numberNumber == maxNum) {
alert("No more numbers to generate.");
} else {
numberNumber = numberNumber+1
number = getRandomInt(maxNum) + 1
if(list="") {
list = number + " " + numberNumber + ","
} else {
list = list + number + " " + numberNumber + ","
}
}}