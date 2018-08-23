// GAME BOARD //
// - constructor de la grille avec coordonnées
$(".game-over").hide();
$(".you-win").hide();


function Game() {
    this.board = [
        ["C", "W", "W", "W", "W", "W", "W", "W", "B", "B", "L", "B", "W", "W", "W", "W", "W", "W", "W", "W"],
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

    this.crocoSpeed =[ //valeur du counter + valeur par defaut du counter
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120],
        [120, 120]
    ];
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
secondsCounter = 0;
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
            if( player.board[l][c] === "B" ) {
                $( "#" + l + "-" + c ).addClass( "boat" );
            }
            if( player.board[l][c] === "L" ) {
            $( "#" + l + "-" + c ).addClass( "captain" );
            }
        }
    }
    for(i=0; i<player.crocoSpeed.length; i++){
        player.crocoSpeed[i][0] -= 1;
        if (player.crocoSpeed[i][0] === 0){
            player.crocoSpeed[i][0] = player.crocoSpeed[i][1];
            for (j=0; j<=player.board[i].length; j++){
                if (player.board[i][j] === "C"){
                    player.board[i][j] = "W"
                    player.board[i][j+1] = "C"  
                }
            }
            
        }
       // console.log(player.crocoSpeed[i][0]);
    }

    //requestAnimationFrame(function(){
    //    updateBoard()
    //})

}
    updateBoard();


   function moveLeft(){

       if (player.playerPosition.x > 0) {
            player.playerPosition.x -= 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y][player.playerPosition.x + 1] = "W";
            $(".pipo").css(
                { "background-image":""}
                )
        }
       removeDiamond()
       updateBoard();
       gameOver();
       youWin();
    }

    function moveRight(){
        if (player.playerPosition.x < 19){
             player.playerPosition.x += 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y][player.playerPosition.x - 1] = "W";
             $(".pipo").css(
                { "background-image":""}
             )
        }
        removeDiamond()
        updateBoard();
        gameOver();
        youWin();
    }
     function moveUp(){
        if (player.playerPosition.y > 0){
             player.playerPosition.y -= 1;
             player.board[player.playerPosition.y][player.playerPosition.x] = "P";
             player.board[player.playerPosition.y +1][player.playerPosition.x] = "W";
             $(".pipo").css(
                { "background-image":""}
             )
        }
        removeDiamond()
        updateBoard();
        gameOver();
        youWin();
    }

    function moveDown(){
       if (player.playerPosition.y < 24){
            player.playerPosition.y += 1;
            player.board[player.playerPosition.y][player.playerPosition.x] = "P";
            player.board[player.playerPosition.y - 1][player.playerPosition.x] = "W";
            $(".pipo").css(
                { "background-image":""}
             )
        }
       removeDiamond()
       updateBoard();
       gameOver();
       youWin();
    }
            

 var body = $("body");
 body.keyup(function () {
     switch (event.keyCode) {
       case 37:  // left arrow  
         moveLeft();
         $(".pipo").css(
         { "background-image":"url('file:///home/julie/code/projects/project1/images/pirate-left.png')"}
         )
         break;
   
      case 38: // up arrow
       moveUp();
       $(".pipo").css(
        { "background-image":"url('file:///home/julie/code/projects/project1/images/pirate-back.png')"}
        )
       break;
   
       case 39: // right arrow
       moveRight();
       $(".pipo").css(
        { "background-image":"url('file:///home/julie/code/projects/project1/images/pirate-right.png')"}
        )
       break;
   
       case 40: // down arrow
       moveDown();
       $(".pipo").css(
        { "background-image":"url('file:///home/julie/code/projects/project1/images/pirate-front.png')"}
        )
       break;
     }
 });


// CROCODILES //
// - moves from right to left or left to right
// - more you go in the top, more crocodiles and speeder ones
// 1 vitesse specifique à chaque ligne


// ISLANDS //
// - crocodiles disapears and come back after passing the island
//$(".island").removeClass("crocodile");

// DIAMONDS //
// - When Pipo touch diamond it disapears OK
// - when Pipo touch a diamond, the counter is updating OK
// - When a diamond is taken, it is replaced by an island OK
var score = 0;
var counter = document.querySelector('.counter')
function removeDiamond(){
    $(".pipo").removeClass("diamond");
    $(".diamond").addClass("island").addClass("diamond-taken");
    
    
    if ($(".pipo").hasClass("diamond-taken")){
    score += 1
    counter.innerHTML = score;
    $(".pipo").removeClass("diamond-taken");
    
    }
};


// GAME OVER //
// - game over when player touches a crocodile **OK mais pb CSS à régler**
function gameOver(){
    if ($(".crocodile").hasClass("pipo")){
        $(".game-over").show();
        $(".tile").fadeOut(4000);
    };
};

// WIN //
// - player wins if he has all the gemes and arives to the boat **OK mais pb CSS à régler**
function youWin(){
    if ($(".boat").hasClass("pipo") && score>=7 || $(".captain").hasClass("pipo") && score>=7){
        $(".you-win").show();
        $(".tile").fadeOut(4000);
    };
};





// ETAPES CROCO MOVEMENT
// 1. créer notre array de speeds OK
// 2. Intégrer la décroissance des vitesses à updateBoard
// 3. dans la loop de décroissance, checker à chaque fois si crocospeed[i][0] === 0
// 4. une fois que la valeur est à 0, la réinitialiser à sa valeur de base
// 5. Si arrivé à 0, bouger la ligne correspondante vers la gauche