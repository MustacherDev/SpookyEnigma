
var objTypeCounter = 0;


function spriteData(x, y, frames, sprite){
  this.hspd = 0;
  this.vspd = 0;
  this.vacc = 0.1;

  this.vspdMax = 4;
  this.x = x;
  this.y = y;
  this.angle = 0;
  this.frames = frames;

  this.sprite = sprite;




  this.update = function(){
    this.vspd += this.vacc;
    this.vspd = (this.vspd > this.vspdMax) ? this.vspdMax : this.vspd;

    this.x += this.hspd;
    this.y += this.vspd;


    this.angle = Math.sin(this.frames/50)*Math.PI/4;


    this.frames++;


    if(this.y >=  window.innerHeight + 400){
      this.reset();
    }
  }

  this.show = function(){
    this.sprite.drawRot(this.x, this.y, 0, 0, 1, 1, this.angle, true);
  }

  this.reset = function(){
    //this.x = Math.random() * window.innerWidth;
    this.y = -400 -Math.random() *1500;
    this.frames = Math.random()*300;
    this.vspd = 0;
    this.hspd = 0;


    const randomImage = spriteImages[objTypeCounter];
	objTypeCounter++;
if(objTypeCounter >= spriteImages.length){	
	objTypeCounter = 0;
}
    this.sprite = randomImage;
  }
}


var objList = [];
document.addEventListener("DOMContentLoaded", function() {
  for(var i = 0; i  < 10; i++){
const randomImage = spriteImages[objTypeCounter];
	objTypeCounter++;
if(objTypeCounter >= spriteImages.length){	
	objTypeCounter = 0;
}
	var xx = (window.innerWidth/10)*(i+0.5);
	 var yy = -1500*Math.random();

    var spr = new spriteData(xx, yy, Math.random()*300, randomImage);
    objList.push(spr);
  }
});


function step(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var width = canvas.width;
  var height = canvas.height;

  canvas.style.left = ((window.innerWidth - width)/2)+"px";
  canvas.style.top  = ((window.innerHeight - height)/2)+"px";


  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
  for(var i = 0; i < objList.length; i++){
    objList[i].update();
    objList[i].show();
  }

  window.requestAnimationFrame(step);

}

window.requestAnimationFrame(step);
