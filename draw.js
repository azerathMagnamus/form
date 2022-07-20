function createrandombubblearray(total) {
  let temp = [];
  for (let n = 0; n < total; n++) {
    temp.push(newrandom());
  }
  return temp;
}
function createrandomblocksarray(total) {
  let temc = [];
  for (let n = 0; n < total; n++) {
    temc.push(randomblocks());
  }
  return temc;
}
function newbubble(initalx, intialy, intialr, intialcolor) {
  return {
    x: initalx,
    y: intialy,
    r: intialr,
    color: intialcolor,
  };
}
function backround(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}
function drawabubble(abubble) {
  stroke(abubble.color);
  circle(abubble.x, abubble.y, abubble.r, "stroke");
}
function movebubble(abubble) {
  abubble.x += randomint(-2, 3);
  abubble.y += randomint(-2, 3);
}
function newrandom() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    h: randomint(10, 100),
    w: randomint(10, 100),
    color: randrgb(),
  };
}

function drawblocks(abubble) {
  fill(abubble.color);
  rect(abubble.x, abubble.y, abubble.w, abubble.h, "fill");
}
function moveblocks(abubble) {
  abubble.y += randomint(1, 3);
}

function position(abubble) {
  if (abubble.x >= cnv.width || abubble.y >= cnv.height) {
    refresh();
  }
}

function refresh(abubble) {
  console.log("refresh");
  drawblocks();
  moveblocks();
}
function randomblocks() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    w: randomint(50, 100),
    h: randomint(10, 30),
    color: randrgb(),
  };
}
