let width = screen.width, height = screen.height - 115;

let deg = function(degree){
    return degree * (PI/180);
}

function putZero(num){
    if(num < 10){
        return '0';
    }
    return num.toString().charAt(200);

}

let convertHours = function(clockHours){
    if(clockHours > 12){
        return clockHours = clockHours - 12;
    }
    if(clockHours <= 12 && clockHours != 0){
        return clockHours;
    }
    if(clockHours == 0){
        return 12;
    }
}

function getMeridian(hours){
    if(hours >= 12){
        return 'PM';
    }
    if(hours < 12){
        return 'AM';
    }
}

function generateColor(){
    let lowerbound = 0, upperbound = 255;
    let color = random(lowerbound, upperbound);
    console.log('Color : ',color);
    return color;
}

function setup(){
     bg = loadImage('back.jpg');
    createCanvas(width, height);
    img = loadImage('back2.jpg');
}

function draw(){
    background(255);
    noFill();
    stroke(142, 68, 173);
    cursor('pointerMod.png');

    image(img, 00, 00, 1920, 1080, 300,300);

    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    console.log(seconds);

    strokeWeight(10);
    arc(width/2, height/2, 150, 150, 0, deg(convertHours(hours) * 30));
    stroke(241, 196, 15);
    arc(width/2, height/2, 200, 200, 0, deg(minutes * 6));
    stroke(26, 188, 156);
    arc(width/2, height/2, 250, 250, 0, deg(seconds * 6));

    noStroke();
    fill(26, 188, 156, 170);
    circle(mouseX, mouseY,35);

    noStroke();
    textFont('quicksand');
    textSize(25);
    console.log('HOurs : ',hours);
    let digitalTimePosX = width/2 - 50, digitalTimePosY = height/2 + 200;
    strokeWeight(1);
    fill(142, 68, 173);
    stroke(142, 68, 173);
    text(putZero(convertHours(hours)) + convertHours(hours)  + ' : ', digitalTimePosX + (textWidth(hours) - 60), digitalTimePosY);
    fill(241, 196, 15);
    stroke(241, 196, 15);
    text(putZero(minutes) + minutes + ' : ', digitalTimePosX + (textWidth(minutes)), digitalTimePosY);
    fill(26, 188, 156);
    stroke(26, 188, 156);
    text(putZero(seconds) + seconds + ' ', digitalTimePosX + (textWidth(seconds) + 70), digitalTimePosY);
    // fill(generateColor(), generateColor(), generateColor());
    fill(169);
    stroke(169);
    text(getMeridian(hours), digitalTimePosX + (textWidth(seconds) + 110), digitalTimePosY);
}
