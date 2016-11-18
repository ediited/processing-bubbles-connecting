var anzahl = 500;
var abprall = false;
frameRate(60);

var kugel = function(){
 this.x=0;
 this.y=0;
 this.xdir=0;
 this.ydir=0;
};

var bubble = new kugel();
bubble.xdir = 3;
bubble.ydir = 3;


var kugeln = [];
for (var i = 0 ; i < anzahl ; i++ ){
    kugeln[i]=new kugel();
    kugeln[i].x= floor(random(-width*2,0));
    kugeln[i].y= floor(random(-height*2,0));
    kugeln[i].xdir = round(random(1,5));
    kugeln[i].ydir = kugeln[i].xdir;
    
}

var draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < anzahl ; i++ ){
    
    if (!abprall){
        if (kugeln[i].x>width+10||kugeln[i].y>height+10){
        kugeln[i].x= floor(random(-width*2,0));
        kugeln[i].y= floor(random(-height*2,0));
        kugeln[i].xdir = round(random(1,3));
        kugeln[i].ydir = kugeln[i].xdir;
        }
    }
    else{
        
        
    if (kugeln[i].x>width+5){
      kugeln[i].xdir = -kugeln[i].xdir;  
    }
    if (kugeln[i].y>height+5){
     kugeln[i].ydir = -kugeln[i].ydir;   
    }
    if (kugeln[i].x<-5){
      kugeln[i].xdir=-kugeln[i].xdir;
    }
    if (kugeln[i].y<-5){
      kugeln[i].ydir = -kugeln[i].ydir;    
    }    
        
        
        
        
    }
    
    
    kugeln[i].x = kugeln[i].x+kugeln[i].xdir;
    kugeln[i].y = kugeln[i].y+kugeln[i].ydir;
   stroke(0, 200-sqrt(pow(kugeln[i].xdir*20,2)), 255);
   fill(0, 200-sqrt(pow(kugeln[i].xdir*20,2)), 255,50);
   //strokeWeight(kugeln[i].xdir);
    ellipse(kugeln[i].x,kugeln[i].y,sqrt(pow(kugeln[i].xdir*10,2)),sqrt(pow(kugeln[i].xdir*10,2)));
    }
};

var mousePressed = function(){
  if  (abprall){
      abprall = false;
  }
  else{
      abprall = true;   
  }
    
};
