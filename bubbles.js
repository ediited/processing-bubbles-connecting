var anzahl = 1000;
var kugel = function(){
 this.x=0;
 this.y=0;
 this.xdir=0;
 this.ydir=0;
};
var kugeln = [];
/*
for (var i = 0 ; i < anzahl ; i++ ){
    kugeln[i]=new kugel();
    kugeln[i].x= floor(random(-width*2,0));
    kugeln[i].y= floor(random(-height*2,0));
    kugeln[i].xdir = round(random(1,3));
    kugeln[i].ydir = kugeln[i].xdir;

}
*/

var draw = function() {
    background(255, 255, 255);
    
    append(kugeln,new kugel());
    kugeln[kugeln.length-1].x= floor(random(-width*2,0));
    kugeln[kugeln.length-1].y= floor(random(-height*2,0));
    kugeln[kugeln.length].xdir = round(random(1,3));
    kugeln[kugeln.length].ydir = kugeln[kugeln.length-1].xdir;
    
    for (var i = 0; i < anzahl ; i++ ){
    kugeln[i].x = kugeln[i].x+kugeln[i].xdir;
    kugeln[i].y = kugeln[i].y+kugeln[i].ydir;
        if (kugeln[i].x>width+10||kugeln[i].y>height+10){
        kugeln[i].x= floor(random(-width*2,0));
        kugeln[i].y= floor(random(-height*2,0));
        kugeln[i].xdir = round(random(1,3));
        kugeln[i].ydir = kugeln[i].xdir;
        }
    ellipse(kugeln[i].x,kugeln[i].y,kugeln[i].xdir*10,kugeln[i].xdir*10);
    }
};