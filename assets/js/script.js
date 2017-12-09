// Global Variables: Game Piece Positions and Counter
var ufo = document.getElementById('ufo');
var spaceship = document.getElementById('spaceship');

let ufoPosX = 0; 
let ufoPosY = 50;
let ufoCounter = 0;

let spaceshipPosX = 0; 
let spaceshipPosY = 45;
let spaceshipCounter = 0;

// This function listens for keyup events 
document.addEventListener('keyup', function(e){
    // console.log(e.keyCode);

    // UFO MOVING 
    if(e.keyCode === 83){
        // Move Down
        ufoPosY++;
        ufo.style.top = ufoPosY + "vh";
    } else if(e.keyCode === 87){
        // console.log("W");
        // Move Up
        ufoPosY--;
        ufo.style.top = ufoPosY + "vh";
        // console.log(posY);
    } else if(e.keyCode === 65){
        // console.log("A");
        // Move Left
        ufoPosX--;
        // console.log(ufoPosX);
        ufo.style.left = ufoPosX + "vw";
        // console.log(posY);
    } else if(e.keyCode === 68){
        // console.log("D");
        // Move Right
        ufoCounter++;
        ufoPosX++;
        // console.log(ufoPosX);
        ufo.style.left = ufoPosX + "vw";

        if(ufoCounter == 40){
            removeBitcoin();
            var x = document.getElementById('winText');
            x.classList.add("won");
            x.innerHTML = "UFO WINS!";
            
        }
    }


    // SPACESHIP MOVING
    if(e.keyCode === 75){
        // console.log("S");
        // Move Down
        spaceshipPosY++
        spaceship.style.top = spaceshipPosY + "vh";
        // console.log(posY);
    } else if(e.keyCode === 73){
        // console.log("W");
        // Move Up
        spaceshipPosY--;
        spaceship.style.top = spaceshipPosY + "vh";
        
        // console.log(posY);
    }  else if(e.keyCode === 76){
        // console.log("D");
        // Move Right
        
        spaceshipPosX--;
        spaceship.style.right = spaceshipPosX + "vw";
    } else if(e.keyCode === 74){
        // console.log("A");
        // Move Left
        spaceshipCounter++;
        spaceshipPosX++;
        spaceship.style.right = spaceshipPosX + "vw";
        // console.log(posY);

        if(spaceshipCounter == 40){
            removeBitcoin();
            var x = document.getElementById('winText');
            x.classList.add("won");
            x.innerHTML = "SPACESHIP WINS!";
        }
    
        
    }

    // This function will remove bitcoin as soon as one player wins
    function removeBitcoin(){
        var bitcoin = document.getElementById('bitcoin');
        bitcoin.remove();
    }
});




