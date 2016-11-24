
var gewirr = function(startx, starty) {

    var spot = function(echtx, echty) {
        this.x = random(echtx - 20, echtx + 20);
        this.y = random(echty - 20, echty + 20);
        this.px = this.x;
        this.py = this.y;
    };
    var anzahl = 5;
    var arr = [];

    for (var i = 0; i < anzahl; i++) {
        arr[i] = new spot(startx, starty);
    }

    this.color = [0, 0, 0];

    //background(0, 0, 0);

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
                    arr[i].x = arr[i].x + (mouseX - arr[i].x) / 10;
                }
                if (mouseX < arr[i].x) {
                    arr[i].x = arr[i].x - (arr[i].x - mouseX) / 10;
                }
                if (mouseY > arr[i].y) {
                    arr[i].y = arr[i].y + (mouseY - arr[i].y) / 10;
                }
                if (mouseY < arr[i].y) {
                    arr[i].y = arr[i].y - (arr[i].y - mouseY) / 10;
                }
            }


            //rect(-10,-10,width*2,height*2);
            arr[i].x += random(-1.5, 1.5);
            arr[i].y += random(-1.5, 1.5);

        }




    };


};

fill(255, 255, 255, 30);
var gewarr = [];
var anzahl = 48;
for (var i = 0; i < anzahl; i++) {

    gewarr[i] = new gewirr(random(0, width), random(0, height));
    gewarr[i].color = [random(100, 230), random(100, 230), random(100, 230)];
}
strokeWeight(1);

var draw = function() {
    for (var i = 0; i < anzahl; i++) {

        gewarr[i].drawGew();


    }


    rect(-10, -10, width * 2, height * 2);
};