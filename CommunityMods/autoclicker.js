let cps = 2

function click() {
  ModAPI.clickMouse()
}
let intervalTime = 5000 / cps;
let intervalID = setInterval(click, intervalTime);
