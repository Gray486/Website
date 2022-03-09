var maxNum = 0
var minNum = 0
var numberNumber = 0
var list = []
var number = 0
const hideHtml = document.querySelector('#hide');
const onceHtml = document.querySelector('#once');
var hide = ""
var once = ""

function start() {
  hide = hideHtml.checked
  once = onceHtml.checked

  document.getElementById("output").innerHTML = "The number that was generated is: ___"
  maxNum = 0
  minNum = 0
  numberNumber = 0
  list = []
  number = 0

  if (document.getElementsByName("maxNum")[0].value !== ""){
  maxNum = document.getElementsByName("maxNum")[0].value;
  alert('Numbers Have been created... Click "Next Number" or to see them.')
  if (document.getElementsByName("minNum")[0].value !== "") {
    minNum = parseInt(document.getElementsByName("minNum")[0].value) - 1;
    maxNum -= minNum
  }} else {
    alert("ERROR: Please enter the required feilds.")
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function nextNumber() {
if((numberNumber == maxNum) && (once == true)) {
alert("No more numbers to generate.");
numberNumber = 0
list = []
maxNum = 0
minNum = 0
} else {
numberNumber += 1
number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else {
  if (once == true) {
    list.push(number)
  }
  if (document.getElementsByName("minNum")[0].value !== "") {
    number = number + minNum
    tell()
  } else {
  tell()
  }
number = 0
}}}

function retry(){
  number = getRandomInt(maxNum) + 1
if (list.indexOf(number) !== -1){
  retry()
} else { 
  if (once == true) {
  list.push(number)
  }
if (document.getElementsByName("minNum")[0].value !== "") {
  number = number + minNum
  tell()
} else {
tell()
}
number = 0
}}

function tell() {
  if (hide == false) {
    document.getElementById("output").innerHTML = "The number that was generated is: " + number
  } else {
    alert("The number that was generated is: " + number)
  }
}