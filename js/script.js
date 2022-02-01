window.addEventListener('load', start);
var Color1 = null;
var Color2 = null;
var Color3 = null;

function start() {
  Color1 = document.getElementById('Color1').value;
  document.getElementById('NumberColor1').value = Color1;

  Color2 = document.getElementById('Color2').value;
  document.getElementById('NumberColor2').value = Color2;

  Color3 = document.getElementById('Color3').value;
  document.getElementById('NumberColor3').value = Color3;

  var box = 'rgb(' + Color1 + ',' + Color2 + ',' + Color3 + ')';

  var Div = document.querySelector('.Box');
  Div.style.backgroundColor = box;
}
