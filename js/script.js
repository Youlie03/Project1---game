// GAME BOARD //
// - constructor de la grille avec coordonnées
function Game() {
    this.board = [
        ["C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["C", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C"],
        ["D", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "C"],
        ["I", "C", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C"],
        ["C", "W", "W", "W", "W", "W", "W", "I", "D", "I", "W", "W", "C", "W", "W", "W", "W", "W", "W", "C"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C"],
        ["W", "C", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W"],
        ["C", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["I", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "C", "W", "I", "D", "W", "W", "W", "W", "W"],
        ["D", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W"],
        ["I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "C", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W"],
        ["W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "D"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "I"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "I", "D", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "I", "I", "D", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "C", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
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
// - Moves all directions OK
// - Stops when touches borders OK

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
                if( player.board[l][c] === "C" ) {
                    $( "#" + l + "-" + c ).addClass( "crocodile" );
            }
        }
    }
         
    }
    updateBoard();


   function moveLeft(){

       if (player.playerPosition.x > 0) {
            player.playerPosition.x -= 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y][player.playerPosition.x + 1] = "W";
       }
       removeDiamond()
       updateBoard();
    }
    function moveRight(){
        if (player.playerPosition.x < 19){
             player.playerPosition.x += 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y][player.playerPosition.x - 1] = "W";
        }
        removeDiamond()
        updateBoard();
     }
     function moveUp(){
        if (player.playerPosition.y > 0){
             player.playerPosition.y -= 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y +1][player.playerPosition.x] = "W";
        }
        removeDiamond()
        updateBoard();
     }

    function moveDown(){
       if (player.playerPosition.y < 24){
            player.playerPosition.y += 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y - 1][player.playerPosition.x] = "W";
       }
       removeDiamond()
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
// - crocodiles disapears and come back after passing the island


// DIAMONDS //
// - When Pipo touch diamond it disapears
// - when Pipo touch a diamond, the counter is updating
// - When a diamond is taken, it is replaced by an island
function removeDiamond(){
    $(".pipo").removeClass("diamond");
    $(".diamond").addClass("island")

  
    
};
//updateBoard();


////function removeDiamond(){
////    for( var l = 0; l < 25; l++ ) {
////        for( var c = 0; c < 20; c++ ) {
////    if(player.board[l][c] === "D") {
////        $( "#" + l + "-" + c ).removeClass( "diamond" );
////        }
////    }
////} 
////removeDiamond()
////updateBoard(); 
////}  





// GAME OVER //
// - game over when player touches a crocodile
// 


// WIN //
// - player wins if he has all the gemes and arives to the boat//