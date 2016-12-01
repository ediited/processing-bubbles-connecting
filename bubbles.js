var anzahl = 50;
var abprall = false;
frameRate(60);
var kugeln = [];

var kugel = function(){
 this.x= floor(random(-width*2,0));
 this.y= floor(random(-height*2,0));
 this.xdir= round(random(1,3));
 this.ydir= this.xdir;
 
 this.draw= function() {
    if (this.x>width+10||this.y>height+10){
    this.reset();
    }
    this.x = this.x+this.xdir;
    this.y = this.y+this.ydir;
    stroke(200, 20-sqrt(pow(this.xdir*20,2)), 20);
    fill(200, 200-sqrt(pow(this.xdir*20,2)), 20,50);
    strokeWeight(this.xdir);
    ellipse(this.x,this.y,sqrt(pow(this.xdir*10,2)),sqrt(pow(this.xdir*10,2)));
 };
 this.reset = function(){
    this.x= floor(random(-width*2,0));
    this.y= floor(random(-height*2,0));
    this.xdir = round(random(1,3));    
    this.ydir = this.xdir;
 };
};
for (var i = 0 ; i < anzahl ; i++ ){
    kugeln[i]=new kugel();
}
background(240,240,240);
var draw = function() {
    fill(255,255,255,8);
    rect(-width,-height,width*2,height*2);
    //background(255, 255, 255);
    for (var i = 0; i<anzahl;i++){
     kugeln[i].draw();   
    }
};