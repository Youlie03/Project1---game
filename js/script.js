// GAME BOARD //
// - constructor de la grille avec coordonnées
function Game() {
    this.board = [
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["D", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "I", "D", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "I", "D", "W", "W", "W", "W", "W"],
        ["D", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "D"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "I"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "I", "D", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "I", "I", "D", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "P", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
    ];

    this.playerPosition ={
        x: 9,
        y: 24
    }; 
};

    var player = new Game();






// - create a grid in html with a loop
for (var l = 0 ; l<25; l++){
    for (var c = 0; c < 20; c++){
    var newTile = $("<div id='" + l + "-" + c + "' class='tile'></div>");
    
    $( ".game-board" ).append( newTile );
    }
    
} 

// PLAYER // 
// - Moves all directions
// - Stops when touches borders

function updateBoard() {
    $(".tile").removeClass("pipo");
    for( var l = 0; l < 25; l++ ) {
        for( var c = 0; c < 20; c++ ) {
            if(player.board[l][c] === "P") {
                $( "#" + l + "-" + c ).addClass( "pipo" );
                }
                if( player.board[l][c] === "W" ) {
                    $( "#" + l + "-" + c ).addClass( "tile" );
                }
                if( player.board[l][c] === "I" ) {
                    $( "#" + l + "-" + c ).addClass( "island" );
                }
                if( player.board[l][c] === "D" ) {
                    $( "#" + l + "-" + c ).addClass( "diamond" );
                }
            }
        }
         
    }
    updateBoard();


   function moveLeft(){
       if (player.playerPosition.x > 0){
            player.playerPosition.x -= 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y][player.playerPosition.x + 1] = "W";
       }
       updateBoard();
    }
    function moveRight(){
        if (player.playerPosition.x < 19){
             player.playerPosition.x += 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y][player.playerPosition.x - 1] = "W";
        }
        updateBoard();
     }
     function moveUp(){
        if (player.playerPosition.y > 0){
             player.playerPosition.y -= 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y +1][player.playerPosition.x] = "W";
        }
        updateBoard();
     }

    function moveDown(){
       if (player.playerPosition.y < 24){
            player.playerPosition.y += 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y - 1][player.playerPosition.x] = "W";
       }
       updateBoard();
    }
            

 var body = $("body");
 body.keyup(function () {
     switch (event.keyCode) {
       case 37:  // left arrow  
         moveLeft();
         break;
   
      case 38: // up arrow
       moveUp();
       break;
   
       case 39: // right arrow
       moveRight();
       break;
   
       case 40: // down arrow
       moveDown();
       break;
     }
 } );



// CROCODILES //
// - moves from right to left or left to right
// - more you go in the top, more crocodiles and speeder ones


// ISLANDS //
// - crocodiles disapears oand come back after passing the island
//$("#l20-c3 , #l20-c4 , #l20-c5, #l16-c18, #l17-c18, #l8-c2, #l8-c3, #l11-c10, #l11-c11 ,#l5-c20, #l2-c1, #l3-c1, #l14-c2, #l14-c3, #l14-c4 ").addClass("island")


// DIAMONDS //
//$("#l20-c4, #l16-c18, #l8-c3, #l11-c11, #l3-c1, #l5-c20, #l14-c2 ").addClass("diamond");

// GAME OVER //
// - game over when player touches a crocodile
// 



// WIN //
// - player wins if he has all the gemes and arives to the boat//