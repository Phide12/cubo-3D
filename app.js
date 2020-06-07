class Cube {
  constructor(sideSize) {
    this.sideSize = sideSize;
    this.isMoving = false;
    this.startPosX = null;
    this.startPosY = null;
  }

  generateCube() {
    for (let i = 0; i < 6; i++) {
      let face = document.createElement('div')
      face.className = 'cube_side';
      face.style.width = this.sideSize + 'vmin';
      face.style.height = this.sideSize + 'vmin';
      switch (i) {
        case 1:
          face.style.transform = "rotateY(90deg)";
          break;
        case 2:
          face.style.transform = "rotateY(180deg)";
          break;
        case 3:
          face.style.transform = "rotateY(-90deg)";
          break;
        case 4:
          face.style.transform = "rotateX(90deg)";
          break;
        case 5:
          face.style.transform = "rotateX(-90deg)";
          break;
      }
      face.style.transform += "translateZ(" + this.sideSize / 2 + "vmin)";
      document.querySelector('.cube').appendChild(face);
    }
  }
}


function loadCube() {
  let sideSize = 15;
  rotacionX = 45;
  rotacionY = 45;

  cubeElement = new Cube(sideSize);
  cubeElement.generateCube();
  window.addEventListener('mousedown', startDrag);
  window.addEventListener('touchstart', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('mousemove', checkDrag);
  window.addEventListener('touchmove', checkDrag);
  document.querySelector('.cube').style.transform = 'rotateX(' + -rotacionY + 'deg) rotateY(' + rotacionX + 'deg)';
}

function startDrag() {
  cubeElement.isMoving = true;
  cubeElement.startPosX = event.x + rotacionX;
  cubeElement.startPosY = event.y - rotacionY;
  document.querySelector('.cube').classList.toggle("rotate");
}

function stopDrag() {
  cubeElement.isMoving = false;
  cubeElement.startPosX = null;
  cubeElement.startPosY = null;
  document.querySelector('.cube').classList.toggle("rotate");
}

function checkDrag() {
  if (cubeElement.isMoving) {
    rotacionX = (event.x - cubeElement.startPosX) / Math.PI;
    rotacionY = (event.y - cubeElement.startPosY) / Math.PI;
    console.log(rotacionX);
    document.querySelector('.cube').style.transform = 'rotateX(' + -rotacionY + 'deg) rotateY(' + rotacionX + 'deg)';
  }
}


loadCube();