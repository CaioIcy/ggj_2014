/* *************************
 * Variables / Constants
 * *************************/

// Canvas/Context
var canvas = document.getElementById("canvas");
var d = canvas.getContext("2d");
var auxcanvas = document.getElementById("auxcanvas");
var daux = auxcanvas.getContext("2d");
// Auxiliary global index
var i = 0;
// Keystrokes array
var pressedKeys = [];

var state = 0;
var level = 1;

var ENDGAME_VICTORY = false;
var ENDGAME_GAMEOVER = false;

var STATE_MENU = 0;
var STATE_GAME = 1;
var STATE_CREDITS = 2;
var STATE_HELP = 3;
var STATE_ENDGAME = 4;

var gameTime = 0;
var paused = false;

var PLAYER_IS_CIRCLE = 1;
var PLAYER_IS_SQUARE = 2;
var PLAYER_IS_TRIANGLE = 3;

var FRICTION = 0.95;
var FLOOR = canvas.height-24;
var SQUARE_SPEED = 300;
var TRIANGLE_SPEED = 300;
var CIRCLE_SPEED = 600;

var FROM_LEFT = 1;
var FROM_RIGHT = 2;
var FROM_DOWN = 3;
var FROM_UP = 4;
var NOT_COLLIDING = 5;

var SPRITE_SIZE = 64;
var JUMPSPEED = (-830);

var player_direction = '';

var LEFT_CAMERA_PIN = 200;
var RIGHT_CAMERA_PIN = 400;

var BACKGROUND_WIDTH = 2000;
