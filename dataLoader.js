// Canvas context


var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = canvas.width;
var height = canvas.height;

canvas.style.left = ((window.innerWidth - width)/2)+"px";
canvas.style.top  = ((window.innerHeight - height)/2)+"px";
canvas.style.position = "absolute";

// Anti-alising deactivator
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;



// Sprite OBJECT
function Sprite(img, wid, hei, xoff, yoff){
  this.img = img;

  this.width = wid;
  this.height = hei;
  this.xoffset = xoff;
  this.yoffset = yoff;

  this.imgNumX = img.width/wid;
  this.imgNumY = img.height/hei;

  this.imgNum = this.imgNumX*this.imgNumY;
  this.drawSimple = function(x, y, imgx, imgy, scl){
    ctx.drawImage(this.img, imgx*this.width, imgy*this.height, this.width, this.height, x-this.xoffset, y-this.yoffset, this.width*scl, this.height*scl);
  }


  this.draw = function(x, y, imgx, imgy, xscl, yscl, centerTransform){
    // Centralizing Transformations
    let centerTrnsf = centerTransform || false;

    let offx = this.xoffset;
    let offy = this.yoffset;
    if(centerTrnsf){
      offx = this.width/2;
      offy = this.height/2;
    }

    // Actual Transformations
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(xscl, yscl);

    ctx.drawImage(this.img, imgx*this.width, imgy*this.height, this.width, this.height, -offx, -offy, this.width, this.height);

    ctx.restore();
  }

  this.drawRot = function(x, y, imgx, imgy, xscl, yscl, ang, centerTransform){
    // Centralizing Transformations
    let centerTrnsf = centerTransform || false;

    let offx = this.xoffset;
    let offy = this.yoffset;
    if(centerTrnsf){
      offx = this.width/2;
      offy = this.height/2;
    }

    // Actual Transformations
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(xscl, yscl);
    ctx.rotate(ang);

    ctx.drawImage(this.img, imgx*this.width, imgy*this.height, this.width, this.height, -offx, -offy, this.width, this.height);

    ctx.restore();
  }

  this.drawFix = function(x, y, imgx, imgy, xscl, yscl, ang, transfX, transfY, offSetX, offSetY){
    // Centralizing Transformations

    let transX = transfX;
    let transY = transfY;

    let offx = (-offSetX + transX)*Math.abs(xscl);
    let offy = (-offSetY + transY)*Math.abs(yscl);

    // Actual Transformations
    ctx.save();
    ctx.translate(x + offx, y + offy);
    ctx.scale(xscl, yscl);

    if(ang != 0){
      ctx.rotate(ang);
    }

    ctx.drawImage(this.img, imgx*this.width, imgy*this.height, this.width, this.height, -transX, -transY, this.width, this.height);

    ctx.restore();
  }
}



var goatImg    = new Image();
goatImg.src = "goat.png";
var sprGoat = new Sprite(goatImg, 271, 390, 0, 0);

var freddyImg    = new Image();
freddyImg.src = "freddy.webp";
var sprFreddy = new Sprite(freddyImg, 188, 237, 0, 0);

var ralseiImg    = new Image();
ralseiImg.src = "ralsei.webp";
var sprRalsei = new Sprite(ralseiImg, 105, 200, 0, 0);

var purpleImg    = new Image();
purpleImg.src = "purpleguy.webp";
var sprPurple = new Sprite(purpleImg, 214, 360, 0, 0);

var skidImg    = new Image();
skidImg.src = "skid.webp";
var sprSkid = new Sprite(skidImg, 180, 240, 0, 0);

var napsImg    = new Image();
napsImg.src = "naps.webp";
var sprNaps = new Sprite(napsImg, 300, 300, 0, 0);

var pumpImg    = new Image();
pumpImg.src = "pump.webp";
var sprPump = new Sprite(pumpImg, 250, 250, 0, 0);

var caineImg    = new Image();
caineImg.src = "caine.webp";
var caineSpr = new Sprite(caineImg, 209, 290, 0, 0);

var pumpkingImg    = new Image();
pumpkingImg.src = "pumpking.webp";
var pumpkingSpr = new Sprite(pumpkingImg, 126, 188, 0, 0);

var candyImg    = new Image();
candyImg.src = "candy.png";
var candySpr = new Sprite(candyImg, 192, 142, 0, 0);


var monokumaImg    = new Image();
monokumaImg.src = "monokuma.webp";
var monokumaSpr = new Sprite(monokumaImg, 200,200, 0, 0);

var jevilImg    = new Image();
jevilImg.src = "jevil.webp";
var jevilSpr = new Sprite(jevilImg, 210,200, 0, 0);

var papyrusImg    = new Image();
papyrusImg.src = "papyrus.png";
var papyrusSpr = new Sprite(papyrusImg, 239, 346, 0, 0);


var dryboneImg    = new Image();
dryboneImg.src = "drybone.png";
var dryboneSpr = new Sprite(dryboneImg, 222,222, 0, 0);


var gasterImg    = new Image();
gasterImg.src = "gaster.webp";
var gasterSpr = new Sprite(gasterImg, 209, 429, 0, 0);

var pizzaFaceImg    = new Image();
pizzaFaceImg.src = "pizzaFace.webp";
var pizzaFaceSpr = new Sprite(pizzaFaceImg,360, 305, 0, 0);

var queenImg    = new Image();
queenImg.src = "queen.webp";
var queenSpr = new Sprite(queenImg,360, 503, 0, 0);

var billImg    = new Image();
billImg.src = "bill.webp";
var billSpr = new Sprite(billImg,166,256, 0, 0);

var beppiImg    = new Image();
beppiImg.src = "beppi.webp";
var beppiSpr = new Sprite(beppiImg,295, 263, 0, 0);

const spriteImages = [sprGoat, sprFreddy, sprRalsei, sprPurple, sprSkid, sprNaps, sprPump, caineSpr, pumpkingSpr, monokumaSpr, candySpr, jevilSpr, dryboneSpr, papyrusSpr, gasterSpr, pizzaFaceSpr, queenSpr, billSpr, beppiSpr];
