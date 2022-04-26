var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200,0,100,100)
path.addImage(pathImg)
path.scale = 1.4
//Criando menino que corre 
boy = createSprite(200,340,20,20)
boy.addAnimation("sim",boyImg)
boy.scale = 0.1
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX ;

 //Reiniciar o fundo
if(path.y>400) {
 path.y = path.height /8
}

boy.collide(leftBoundary)
boy.collide(rightBoundary)
 drawSprites();

 }




