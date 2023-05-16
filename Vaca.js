//Vaca

let xVaca = 80;
let yVaca = 368;

function mostraVaca(){ 
  image(imagemDaVaca, xVaca, yVaca, 32, 28);
}

function movimentaVaca(){ 
  if (keyIsDown(UP_ARROW)){ 
     yVaca = yVaca - 3;
  }
  if (keyIsDown(DOWN_ARROW)){ 
     yVaca = yVaca + 3;
  }
}