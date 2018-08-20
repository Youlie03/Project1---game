// GAME BOARD //
// - create a grid in html with a loop
for (var l = 1; l<26; l++){
    for (var c = 1; c < 21; c++){
    var newTile = $("<div id='l"+ l + "-c" + c + "' class= 'tile'> </div>");
    $( ".game-board" ).append( newTile );
    }
    
} 

// PLAYER // 
// - Moves all directions
// - Stops when touches borders

$("#l25-c10").addClass("pipo");

    var pipo = $(".pipo");

    function moveLeft(){
        $("#l25-c10").removeClass("pipo");
        $("#l25-c9").addClass("pipo");
        // capture the id with .attr("id")
    };

    var body = $("body");

    body.keyup(function () {
        switch (event.keyCode) {

          case 37:  // left arrow   // l+1 ou l-1 
          console.log("Helllo")
            moveLeft();
            break;
      
         case 38: // up arrow
          pipo.moveUp();
          break;
      
          case 39: // right arrow
          pipo.moveRight();
          break;
      
          case 40: // down arrow
          pipo.moveDown();
          break;
        }
    } );



// CROCODILES //
// - moves from right
// - more you go in the top, more crocodiles and speeder ones


// ISLANDS //
// - crocodiles disapears and come back after passing the island
$("#l20-c3 , #l20-c4 , #l20-c5, #l16-c18, #l17-c18, #l8-c2, #l8-c3, #l11-c10, #l11-c11 ,#l5-c20, #l2-c1, #l3-c1, #l14-c2, #l14-c3, #l14-c4 ").addClass("island")


// DIAMONDS //
$("#l20-c4, #l16-c18, #l8-c3, #l11-c11, #l3-c1, #l5-c20, #l14-c2 ").addClass("diamond");

// GAME OVER //
// - game over when player touches a crocodile
// 



// WIN //
// - player wins if he has all the gemes and arives to the boat//