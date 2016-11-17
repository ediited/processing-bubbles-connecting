var anzahl = 500;
noFill();
var kugel = function(){
 this.x=0;
 this.y=0;
 this.xdir=0;
 this.ydir=0;
};
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
    kugeln[i].x = kugeln[i].x+kugeln[i].xdir;
    kugeln[i].y = kugeln[i].y+kugeln[i].ydir;
        if (kugeln[i].x>width+10||kugeln[i].y>height+10){
        kugeln[i].x= floor(random(-width*2,0));
        kugeln[i].y= floor(random(-height*2,0));
        kugeln[i].xdir = round(random(1,3));
        kugeln[i].ydir = kugeln[i].xdir;
        }
   stroke(0, 200-kugeln[i].xdir*20, 255);
   strokeWeight(kugeln[i].xdir);
    ellipse(kugeln[i].x,kugeln[i].y,kugeln[i].xdir*10,kugeln[i].xdir*10);
    }
};