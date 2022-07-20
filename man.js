cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// makes array for objects
let blocks = createrandomblocksarray(10);
player = {
  x: 300,
  y: 300,
  w: 20,
  h: 20,
};
console.log(player.x);
requestAnimationFrame(draw);

// Main loop

function draw() {
  backround("white");

  for (let p = 0; p < blocks.length; p++) {
    drawblocks(blocks[p]);
    moveblocks(blocks[p]);
    if (blocks[p].y >= cnv.height) {
      blocks[p].y = -5;
    }
    if (rectCollide(player, blocks[p])) {
      player.y = blocks[p].y + blocks[p].h / 2;
    }
  }
  stroke("green");
  rect(player.x, player.y, player.w, player.h, "stroke");
  document.addEventListener("click", handlerdraw);

  requestAnimationFrame(draw);
}
document.addEventListener("mousedown", handlerdraw);

function handlerdraw() {
  for (let p = 0; p < blocks.length; p++) {}
}

// removes or adds a blocks particle via a up and down keys
setInterval(remove, 3000);
function remove() {
  blocks.pop(randomblocks());
}

document.addEventListener("keydown", handledraw);
function handledraw(event) {
  if (event.keyCode === 40) {
    player.y += 7;
  } else if (event.keyCode === 39) {
    player.x += 7;
  } else if (event.keyCode === 38) {
    player.y -= 7;
  } else if (event.keyCode === 37) {
    player.x -= 7;
  }
}
