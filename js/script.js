// GAME BOARD //
// - create a grid in html with a loop
for (var l = 1; l<26; l++){
    for (var c = 1; c < 21; c++){
    var newTile = $("<div id='l"+ l + " c" + c + "' class= 'tile'> </div>");
    $( ".game-board" ).append( newTile );
    }
    
} 




// PLAYER // 
// - Moves all directions
// - Stops when touches borders



// CROCODILES //
// - moves from right
// - more you go in the top, more crocodiles and speeder ones



// GAME OVER //
// - game over when player touches a crocodile
// 



// WIN //
// - player wins if he has all the gemes and arives to the boat