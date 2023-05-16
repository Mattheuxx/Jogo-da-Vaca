//Carro

//Carro1
let xCarro = 700;
let yCarro = 43;
let veloCarro = 3;

//Carro2

let xCarro2 = 700;
let yCarro2 = 96;
let veloCarro2 = 3.5;

//Carro3

let xCarro3 = 700;
let yCarro3 = 150;
let veloCarro3 = 4;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 45, 38);
  image(imagemCarro2, xCarro2, yCarro2, 45, 38);
  image(imagemCarro3, xCarro3, yCarro3, 45, 38);
}

function movimentaCarro(){ 
  xCarro = xCarro - 3; //3.5 é o valor da velocidade do carro 1
  xCarro2 = xCarro2 - 3.5; //4 é o valor da velocidade do carro 2
  xCarro3 = xCarro3 - 4; //3 é o valor da velocidade do carro 3
  
}

function posIniCarro(){ 
  if (xCarro < -38){ 
    xCarro = 700
  }
  if (xCarro2 < -38){ 
    xCarro2 = 700
  }
  if (xCarro3 < -38){ 
    xCarro3 = 700
  }
} 
  





