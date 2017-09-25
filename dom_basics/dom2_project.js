// dom2_project.js
turn_state = "";

// cell class
var cell = { 
  value:""
  add: function( turn_state ){
    this.value = turn_state;
  }
}

game_board_start = [
  [ cell, cell, cell ],
  [ cell, cell, cell ],
  [ cell, cell, cell ]
]

function change_turn_state( turn_state ){
  if ( turn_state == "" ) {
    // random between x or o
    return turn_state;
  } else if ( turn_state == "x" ) {
    return turn_state = "o";
  }
}

function add_move(){
  // position on current game board becomes current turn value 
}

function make_move() {
   // body...
} 