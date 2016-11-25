var explarray = [];
var explosion = function(startX,startY){
    this.x = startX;
    this.y = startY;
    
    var bullarray = [];
    
    fill(255, 191, 0);
    
    this.bullet = function(xpos,ypos){
      this.x = xpos;
      this.y = ypos;
      this.xdir = 0;
      this.ydir = 0;
      this.color = [random(200,230),random(100,150),random(0,80)];
      this.size = ceil(random(10,35));
    };
    
    
    for (var  i = 0; i<100;i++){
        bullarray[i] = new this.bullet(startX,startY);
        bullarray[i].xdir = random(-1,1)*10;
        bullarray[i].ydir = random(-1,1)*10;
        
    }
    this.life = 0;
    
    this.draw = function() {
        if (this.life<100){
        for (var i = 0; i<100;i++){
         fill(bullarray[i].color[0],bullarray[i].color[1],bullarray[i].color[2]);
         stroke(bullarray[i].color[0]+10,bullarray[i].color[1]+10,bullarray[i].color[2]+10);
         ellipse(bullarray[i].x,bullarray[i].y,bullarray[i].size,bullarray[i].size);  
         bullarray[i].x+=bullarray[i].xdir;
         bullarray[i].y+=bullarray[i].ydir;
         bullarray[i].size-=(bullarray[i].size/100);
        
        }
         this.life++;
        }
    };
    

};
background(0, 0, 0);

var draw= function() {
 fill(222, 222, 222,20);
 rect(-5,-5,1000,1000);  
 for (var i = 0; i<explarray.length;i++){
  explarray[i].draw();   
 }

};



var mousePressed= function(){
    append(explarray,new explosion(mouseX,mouseY));
};