var buttons = document.querySelectorAll("#container #row div");
var player = new Audio();

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    player.src = "audio/" + this.id + ".wav";
    player.play();
  });
}

