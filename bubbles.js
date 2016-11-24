var anzahl = 1;
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
    kugeln[i].xdir = round(random(1,3));
    kugeln[i].ydir = kugeln[i].xdir;
    
}

var draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < anzahl ; i++ ){
        if (kugeln[i].x>width+10||kugeln[i].y>height+10){
        kugeln[i].x= floor(random(-width*2,0));
        kugeln[i].y= floor(random(-height*2,0));
        kugeln[i].xdir = round(random(1,3));
        kugeln[i].ydir = kugeln[i].xdir;
        }
    kugeln[i].x = kugeln[i].x+kugeln[i].xdir;
    kugeln[i].y = kugeln[i].y+kugeln[i].ydir;
   stroke(0, 200-sqrt(pow(kugeln[i].xdir*20,2)), 255);
   fill(0, 200-sqrt(pow(kugeln[i].xdir*20,2)), 255,50);
   //strokeWeight(kugeln[i].xdir);
    ellipse(kugeln[i].x,kugeln[i].y,sqrt(pow(kugeln[i].xdir*10,2)),sqrt(pow(kugeln[i].xdir*10,2)));
    }
};
