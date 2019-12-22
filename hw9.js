/*
  Name: Yufeng Tan
  E-mail: Yufeng_Tan@student.uml.edu
    Assignment: hw9, Implementing a Bit of Scrabble with Drag-and-Drop
                The purposes of this assignment are to give you additional experience working with the jQuery UI
                and to pull together much of what we’ve been doing throughout the semester.
*/

// The distribution of the pieces
var pieces = [
	{"letter":"A", "value":1,  "amount":9},
	{"letter":"B", "value":3,  "amount":2},
	{"letter":"C", "value":3,  "amount":2},
	{"letter":"D", "value":2,  "amount":4},
	{"letter":"E", "value":1,  "amount":12},
	{"letter":"F", "value":4,  "amount":2},
	{"letter":"G", "value":2,  "amount":3},
	{"letter":"H", "value":4,  "amount":2},
	{"letter":"I", "value":1,  "amount":9},
	{"letter":"J", "value":8,  "amount":1},
	{"letter":"K", "value":5,  "amount":1},
	{"letter":"L", "value":1,  "amount":4},
	{"letter":"M", "value":3,  "amount":2},
	{"letter":"N", "value":1,  "amount":6},
	{"letter":"O", "value":1,  "amount":8},
	{"letter":"P", "value":3,  "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1,  "amount":6},
	{"letter":"S", "value":1,  "amount":4},
	{"letter":"T", "value":1,  "amount":6},
	{"letter":"U", "value":1,  "amount":4},
	{"letter":"V", "value":4,  "amount":2},
	{"letter":"W", "value":4,  "amount":2},
	{"letter":"X", "value":8,  "amount":1},
	{"letter":"Y", "value":4,  "amount":2},
	{"letter":"Z", "value":10, "amount":1},
	{"letter":"_", "value":0,  "amount":2}
];

// an array to store the tiles that put on the board
var board = []

var tile_remaining = 100;


$(document).ready(function () {
    generateTileRack();
});

// Generate seven tiles and put them in the rack
function generateTileRack() {
  // clear the holder first
  $('#tile_holder').empty();
  var letter = " ";
  for(var i = 0; i < 7; i++) {
    letter = getRandomLetter();
    tiles = "<img class = \"tile_img\" id=\" + letter + \" src=\"Scrabble_Tiles/" + letter + ".jpg\">";
    tile_num = "tiles" + i;
    // add seven tiles to the holder
    $("#tile_holder").append(tiles);
  }
  drag_drop();
}

// apply drag and drop to the tiles
function drag_drop() {

  $("#tile_holder").droppable({accept: '.tile_img', drop:Drop});

  $(".tile_img").draggable({snap: ".block", snapMode: "inner"});

  function Drop(event, ui) {
    var letter = ui.draggable.prop("id");
    var elem = $(this).attr("id");
    var num = parseInt(elem);
    board[num] = letter;
  }
  cal_score(board);
}

function cal_score(b) {
  var temString;
  for (var i = 0; i < b.length; i ++) {
    temString += b[i];
  }
  tile_remaining --;
  // update the score
  document.getElementById("scoreBox").innerHTML = "Score: " + tile_remaining;
}

// return a random letter and update the amount of the pieces array
function getRandomLetter() {
  // generate a random number between 0 and 26
  rand = Math.floor(Math.random() * 25)

  letter = pieces[rand].letter;

  return letter;
}
