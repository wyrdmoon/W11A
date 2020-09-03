var hover = document.getElementById("script-2");
hover.addEventListener("mouseover",function() {
  hover.style.color ="blue";
});

var click = document.innerHTML= ("header");
click.addEventListener("click", function() {
    click.style.fontSize = "75px";
});

var keydown = document.addEventListener ('keydown', event => {
  if (event.code === 'Space') {
    keydown.body.style.backgroundColor = "orange";
    console.log ('Space pressed');
  }
});

