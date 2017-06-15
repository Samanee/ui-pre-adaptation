var backgroundColors = ["#9b51ae","#4d79ff", "#009999", "#00b377", "#ffcc00",  "#ff9900", "#d27979", "#ff5050"];
var i = 0;

var text = "Ok! Działaj! POWODZENIA :) ";

function changeColor() {
  document.getElementsByTagName("body")[0].style.backgroundColor = backgroundColors[i++];
  
  if (i == backgroundColors.length) {
	document.getElementsByTagName("p")[0].innerHTML = text;
  }
}

window.onload=setInterval(changeColor, 3500);