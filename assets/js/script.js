console.log('javascript is working...');
console.log(window.length);

var ufo = document.getElementById('ufo');
var spaceship = document.getElementById('spaceship');

let ufoPosX = 0; 
let ufoPosY = 0;

let spaceshipPosX = 0; 
let spaceshipPosY = 0;

// ufo.addEventListener('keyup', function(e){
//     console.log(e);
// });

document.addEventListener('keyup', function(e){
    // console.log(e.keyCode);

    // UFO MOVING 
    if(e.keyCode === 83){
        // Move Down
        ufoPosY = ufoPosY + 5;
        ufo.style.top = ufoPosY + "px";
        // console.log(posY);
    } else if(e.keyCode === 87){
        // console.log("W");
        // Move Up
        ufoPosY = ufoPosY -  5;
        ufo.style.top = ufoPosY + "px";
        // console.log(posY);
    } else if(e.keyCode === 65){
        // console.log("A");
        // Move Left
        ufoPosX = ufoPosX - 5;
        // console.log(ufoPosX);
        ufo.style.left = ufoPosX + "px";
        // console.log(posY);
    } else if(e.keyCode === 68){
        // console.log("D");
        // Move Right
        ufoPosX = ufoPosX +  5;
        // console.log(ufoPosX);
        ufo.style.left = ufoPosX + "px";
        // console.log(posY);
    }


    // SPACESHIP MOVING
    if(e.keyCode === 75){
        // console.log("S");
        // Move Down
        spaceshipPosY = spaceshipPosY + 5;
        spaceship.style.top = spaceshipPosY + "px";
        // console.log(posY);
    } else if(e.keyCode === 73){
        // console.log("W");
        // Move Up
        spaceshipPosY = spaceshipPosY - 5;
        spaceship.style.top = spaceshipPosY + "px";
        // console.log(posY);
    } else if(e.keyCode === 74){
        // console.log("A");
        // Move Left
        spaceshipPosX = spaceshipPosX - 5;
        spaceship.style.left = spaceshipPosX + "px";
        // console.log(posY);
    } else if(e.keyCode === 76){
        // console.log("D");
        // Move Right
        spaceshipPosX = spaceshipPosX + 5;
        spaceship.style.left = spaceshipPosX + "px";
        // console.log(posY);
    }
});




