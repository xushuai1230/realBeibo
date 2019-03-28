let __PE;

var animationTimer;

function initBeast(){
  drawBeast();
}

function hideMoments() {
  clearTimeout(animationTimer);

  if (__PE)
    __PE.reset();
}

function drawBeast(){
  if (__PE)
    __PE.step();
}

function passParticlesToRAF(PE) {
  __PE = PE;
}

export {
  initBeast,
  hideMoments,
  drawBeast,
  passParticlesToRAF,
};