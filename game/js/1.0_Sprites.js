/* *************************
 * Game Images
 * *************************/

resources.load([
    'res/background.png',
	'res/square_spritesheet_left.png',
	'res/square_spritesheet_right.png',
	'res/circle_spritesheet_left.png',
	'res/circle_spritesheet_right.png',
	'res/triangle_spritesheet_left.png',
	'res/triangle_spritesheet_right.png',
	'res/misc_spritesheet.png',
	'res/giant_floor.png',
	'res/enemycopter.png',
	'res/gear_animation.png',
	'res/menu.png',
	'res/portal_spritesheet.png'
]);
resources.onReady(initialize);
 
var menu;
var giantFloor = new Image();
giantFloor.src = "res/giant_floor.png";
 
var spritesize = [SPRITE_SIZE, SPRITE_SIZE];

//(url, pos, size, speed, frames, dir, once) 
var IDLE = 0;
var WALKING = 1;
var SKILL = 2;

var playerCircleSprites = new Array();
var playerSquareSprites = new Array();
var playerTriangleSprites = new Array();

/* RIGHT */
var player_circle_idle_right = new Sprite('res/circle_spritesheet_right.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_right = new Sprite('res/square_spritesheet_right.png', [0,0], spritesize, 7, [0,1,2,3], 'horizontal', false);
var player_triangle_idle_right = new Sprite('res/triangle_spritesheet_right.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_right = new Sprite('res/circle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_right = new Sprite('res/square_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_right = new Sprite('res/triangle_spritesheet_right.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_right = new Sprite('res/circle_spritesheet_right.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_right = new Sprite('res/square_spritesheet_right.png', [0,192], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_triangle_skill_right = new Sprite('res/triangle_spritesheet_right.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);

/* LEFT */
var player_circle_idle_left = new Sprite('res/circle_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_square_idle_left = new Sprite('res/square_spritesheet_left.png', [0,0], spritesize, 7, [0,1], 'horizontal', false);
var player_triangle_idle_left = new Sprite('res/triangle_spritesheet_left.png', [0,0], spritesize, 0, [0], 'horizontal', true);

var player_circle_walking_left = new Sprite('res/circle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_square_walking_left = new Sprite('res/square_spritesheet_left.png', [0,64], spritesize, 7, [0,1,2,3,4,5,6], 'horizontal', false);
var player_triangle_walking_left = new Sprite('res/triangle_spritesheet_left.png', [0,128], spritesize, 7, [0,1,2,3,4,5,6,7], 'horizontal', false);

var player_circle_skill_left = new Sprite('res/circle_spritesheet_left.png', [0,256], spritesize, 7, [0], 'horizontal', false);
var player_square_skill_left = new Sprite('res/square_spritesheet_left.png', [0,192], spritesize, 7, [0,1,2,3,4], 'horizontal', false);
var player_triangle_skill_left = new Sprite('res/triangle_spritesheet_left.png', [0,64], spritesize, 7, [0,1,2,3], 'horizontal', false);

playerCircleSprites[IDLE] =  player_circle_idle_left;
playerCircleSprites[WALKING] = player_circle_walking_left;
playerCircleSprites[SKILL] = player_circle_skill_left;

playerSquareSprites[IDLE] = player_square_idle_left;
playerSquareSprites[WALKING] = player_square_walking_left;
playerSquareSprites[SKILL] = player_square_skill_left;

playerTriangleSprites[IDLE] = player_triangle_idle_left;
playerTriangleSprites[WALKING] = player_triangle_walking_left;
playerTriangleSprites[SKILL] = player_triangle_skill_left;

/* MISC */

var box_square_sprite = new Sprite('res/misc_spritesheet.png', [0,0], spritesize, 0, [0], 'horizontal', true);
var boxgear_square_sprite = new Sprite('res/misc_spritesheet.png', [64,0], spritesize, 0, [0], 'horizontal', true);

var box_circle_sprite = new Sprite('res/misc_spritesheet.png', [384,0], spritesize, 0, [0], 'horizontal', true);
var boxgear_circle_sprite = new Sprite('res/misc_spritesheet.png', [448, 0], spritesize , 0, [0], 'horizontal', true);

var box_triangle_sprite = new Sprite('res/misc_spritesheet.png', [192, 0], spritesize , 0, [0], 'horizontal', true);
var boxgear_triangle_sprite = new Sprite('res/misc_spritesheet.png', [256, 0], spritesize , 0, [0], 'horizontal', true);

var metal_box = new Sprite('res/misc_spritesheet.png', [320, 64], spritesize , 0, [0], 'horizontal', true);

var enemycopter_sprite = new Sprite('res/enemycopter.png', [0,0], spritesize, 7, [0,1,2,3], 'horizontal', false);
var gear_sprite =  new Sprite('res/gear_animation.png', [0,0], spritesize, 7, [0,1,2,3,4,3,2,1,0], 'horizontal', false);

var spike_square_start = new Sprite('res/misc_spritesheet.png', [0,3*64], spritesize, 0, [0], 'horizontal', true);
var spike_square = new Sprite('res/misc_spritesheet.png', [1*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square = new Sprite('res/misc_spritesheet.png', [2*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spike_square_end = new Sprite('res/misc_spritesheet.png', [3*64,3*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square_start = new Sprite('res/misc_spritesheet.png', [0,4*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_square_end = new Sprite('res/misc_spritesheet.png', [3*64,4*64], spritesize, 0, [0], 'horizontal', true);

var spike_circle_start = new Sprite('res/misc_spritesheet.png', [0,1*64], spritesize, 0, [0], 'horizontal', true);
var spike_circle = new Sprite('res/misc_spritesheet.png', [1*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle = new Sprite('res/misc_spritesheet.png', [2*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spike_circle_end = new Sprite('res/misc_spritesheet.png', [3*64,1*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle_start = new Sprite('res/misc_spritesheet.png', [0,2*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_circle_end = new Sprite('res/misc_spritesheet.png', [3*64,2*64], spritesize, 0, [0], 'horizontal', true);

var spike_triangle_start = new Sprite('res/misc_spritesheet.png', [0,5*64], spritesize, 0, [0], 'horizontal', true);
var spike_triangle = new Sprite('res/misc_spritesheet.png', [1*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle = new Sprite('res/misc_spritesheet.png', [2*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spike_triangle_end = new Sprite('res/misc_spritesheet.png', [3*64,5*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle_start = new Sprite('res/misc_spritesheet.png', [0,6*64], spritesize, 0, [0], 'horizontal', true);
var spikegear_triangle_end = new Sprite('res/misc_spritesheet.png', [3*64,6*64], spritesize, 0, [0], 'horizontal', true);
