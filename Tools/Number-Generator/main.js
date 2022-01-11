var maxNum
var numberNumber = 0
var list = ["sus"]
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
numberNumber += 1
number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else {
alert(number)
list.push(number)
number = 0
}
}}

function retry(){
  number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else {
alert(number)
list.push(number)
number = 0
}}