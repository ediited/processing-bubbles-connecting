
var gewirr = function(startx, starty) {

    var spot = function(echtx, echty) {
        this.x = random(echtx - 100, echtx + 100);
        this.y = random(echty - 100, echty + 100);
        this.px = this.x;
        this.py = this.y;
        this.returnx=0;
        this.returny=0;
    
    };
    var anzahl = round(random(3,6));
    var arr = [];

    for (var i = 0; i < anzahl; i++) {
        arr[i] = new spot(startx, starty);
    }

    this.color = [0, 0, 0];

    //background(0, 0, 0);
    var resetcounter = 100;
    var returning = true;
    this.drawGew = function() {
    
        stroke(this.color[0], this.color[1], this.color[2]);
        for (var i = 0; i < anzahl; i++) {
            for (var k = 0; k < anzahl; k++) {
                line(arr[i].x, arr[i].y, arr[k].x, arr[k].y);
            }
        }

        
        for (var i = 0; i < anzahl; i++) {

            if (mouseIsPressed) {
                if (mouseX > arr[i].x) {
                    arr[i].x = arr[i].x + (mouseX - arr[i].x) / 200;
                }
                if (mouseX < arr[i].x) {
                    arr[i].x = arr[i].x - (arr[i].x - mouseX) / 200;
                }
                if (mouseY > arr[i].y) {
                    arr[i].y = arr[i].y + (mouseY - arr[i].y) / 200;
                }
                if (mouseY < arr[i].y) {
                    arr[i].y = arr[i].y - (arr[i].y - mouseY) / 200;
                }
            }

            else if(returning){
                if (round(arr[i].x)===round(arr[i].px)){
                    returning = false;
                }
                arr[i].x+=arr[i].returnx;
                arr[i].y+=arr[i].returny;
                //resetcounter++;
            }
            
            
            //rect(-10,-10,width*2,height*2);
            arr[i].x += random(-2.5, 2.5);
            arr[i].y += random(-2.5, 2.5);
            
        }




    };
    
    
    this.reset = function(){
      
      for (var i = 0; i<anzahl;i++){
                if (arr[i].px > arr[i].x) {
                   arr[i].returnx=-((arr[i].x-arr[i].px)/100);
                }
                if (arr[i].px < arr[i].x) {
                    arr[i].returnx=-((arr[i].x-arr[i].px)/100);
                }
                if (arr[i].py > arr[i].y) {
                    arr[i].returny=-((arr[i].y-arr[i].py)/100);
                }
                if (arr[i].py < arr[i].y) {
                    arr[i].returny=-((arr[i].y-arr[i].py)/100);
                }
      }
      resetcounter = 0;
      returning = true;
    };


};

fill(0, 0, 0, 30);
var gewarr = [];
var anzahl = 51;
for (var i = 0; i < anzahl; i++) {

    gewarr[i] = new gewirr(random(-width, width+width/2), random(-height, height+height/2));
    gewarr[i].color = [random(0, 200), random(0, 0), random(200, 230)];
}
strokeWeight(0.5);

var draw = function() {
    for (var i = 0; i < anzahl; i++) {

        gewarr[i].drawGew();


    }


    rect(-10, -10, width * 2, height * 2);
};

var mouseReleased = function(){
  for (var i =0; i< anzahl;i++){
  
   gewarr[i].reset();   
  
  
  }
  
};
