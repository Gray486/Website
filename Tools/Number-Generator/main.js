var maxNum
var numberNumber = 0
var list = []
var number
function start() {
  if (document.getElementsByName("maxNum")[0].value !== ""){
  maxNum = document.getElementsByName("maxNum")[0].value;
  } else {
    alert("ERROR: Please enter the required feilds.")
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function nextNumber() {
if(numberNumber == maxNum) {
alert("No more numbers to generate.");
numberNumber = 0
list = []
maxNum = 0
} else {
numberNumber += 1
number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else {
  document.getElementById("output").innerHTML = "The number that was generated is: " + number
list.push(number)
number = 0
}
}}

function retry(){
  number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else {
document.getElementById("output").innerHTML = "The number that was generated is: " + number
list.push(number)
number = 0
}}