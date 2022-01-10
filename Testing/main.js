function hideMenu() {
  var x = document.getElementById("header");
  var y = document.getElementById("hideMenu");
  if (x.style.display === "none") {
  x.style.display = "block";
  y.style.borderBottom = "rgb(0, 168, 107) 6px none";
  } else {
    x.style.display = "none";
    y.style.borderBottom = "rgb(0, 168, 107) 6px solid";
  }
}