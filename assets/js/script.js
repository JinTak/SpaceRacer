console.log('javascript is working...');
console.log(window.length);

var ufo = document.getElementById('ufo');
var spaceship = document.getElementById('spaceship');

let ufoPosX = 0; 
let ufoCounter = 0;
// let ufoPosY = 0;

let spaceshipPosX = 0; 
let spaceshipCounter = 0;
// let spaceshipPosY = 0;

// ufo.addEventListener('keyup', function(e){
//     console.log(e);
// });

document.addEventListener('keyup', function(e){
    // console.log(e.keyCode);

    // UFO MOVING 
    // if(e.keyCode === 83){
    //     // Move Down
    //     ufoPosY = ufoPosY + 3;
    //     ufo.style.top = ufoPosY + "vh";
    //     // console.log(posY);
    // } else if(e.keyCode === 87){
    //     // console.log("W");
    //     // Move Up
    //     ufoPosY = ufoPosY - 3;
    //     ufo.style.top = ufoPosY + "vh";
    //     // console.log(posY);
    // } else 
    // if(e.keyCode === 65){
    //     // console.log("A");
    //     // Move Left
    //     ufoPosX = ufoPosX - 1;
    //     // console.log(ufoPosX);
    //     ufo.style.left = ufoPosX + "vw";
    //     // console.log(posY);
    // } else 
    
    if(e.keyCode === 68){
        // console.log("D");
        // Move Right
        ufoCounter++;
        ufoPosX = ufoPosX +  1;
        // console.log(ufoPosX);
        ufo.style.left = ufoPosX + "vw";

        if(ufoCounter == 40){
            var x = document.getElementById('winText');
            x.classList.add("won");
            x.innerHTML = "UFO WINS!";
        }
    }


    // SPACESHIP MOVING
    // if(e.keyCode === 75){
    //     // console.log("S");
    //     // Move Down
    //     spaceshipPosY = spaceshipPosY + 3;
    //     spaceship.style.top = spaceshipPosY + "vh";
    //     // console.log(posY);
    // } else if(e.keyCode === 73){
    //     // console.log("W");
    //     // Move Up
    //     spaceshipPosY = spaceshipPosY - 3;
    //     spaceship.style.top = spaceshipPosY + "vh";
    //     // console.log(posY);
    // } else 
    
    if(e.keyCode === 74){
        // console.log("A");
        // Move Left
        spaceshipCounter++;
        spaceshipPosX = spaceshipPosX + 1;
        spaceship.style.right = spaceshipPosX + "vw";
        // console.log(posY);

        if(spaceshipCounter == 40){
            var x = document.getElementById('winText');
            x.classList.add("won");
            x.innerHTML = "SPACESHIP WINS!";
        }
    } 
    
    // else if(e.keyCode === 76){
    //     // console.log("D");
    //     // Move Right
        
    //     spaceshipPosX = spaceshipPosX - 1;
    //     spaceship.style.right = spaceshipPosX + "vw";
        
    // }
});




