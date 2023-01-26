var canvas
var x = 0
var y = 0
var x2 = 0
var y2 = 0
var x3 = 0
var y3 = 0
function preload(){
bigode = loadImage("https://i.postimg.cc/tRWSDFxB/cone-Bigode-PNG-1024x1024.png")
olho1 =  loadImage("https://i.postimg.cc/0QRkRp2V/2-2-eyes-png-9.png")
}

function setup(){
canvas = createCanvas(350, 350)
canvas.center()
camera = createCapture(VIDEO)
camera.size(350, 350)
camera.hide()
poseNet = ml5.poseNet(camera, modelLoaded)
poseNet.on("pose", gotresults)
}
function gotresults(resultado){
console.log(resultado)
if(resultado.length > 0){
  x = resultado[0].pose.nose.x
  y = resultado[0].pose.nose.y
  x2 = resultado[0].pose.rightEye.x
  y2 = resultado[0].pose.rightEye.y
  x3 = resultado[0].pose.leftEye.x
  y3 = resultado[0].pose.leftEye.y
}
}
function modelLoaded(){
  console.log("Modelo carregado")
}

function draw(){
image(camera, 0, 0, 350, 350)
fill("red")
//circle(x, y, 20)
stroke(255, 255, 255)
//image(bigode, x, y, 60, 60)
image(olho1, x2 - 10, y2, 20, 20)
image(olho1, x3 - 10, y3, 20, 20)
}
function takeSnapshot(){
  save("sua-foto.png")
}