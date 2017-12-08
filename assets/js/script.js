console.log('javascript is working...');

var ufo = document.getElementById('ufo');
ufo.addEventListener('keypress', function(e){
    console.log(e);
});

document.addEventListener('keypress', function moveCharacter(e){
    console.log(e);
});



