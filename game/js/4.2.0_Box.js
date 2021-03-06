/* *************************
 * "CLASS": Box
 * *************************/

function Box(x, y, mutant,sprite){

	Entity.call(this,x,y);
	
	this.mutant = mutant;	
	this.sprite = sprite;
	
	this.update = function(dt){
		this.sprite.update(dt);
		if(this.mutant){
			if(player.currentType == PLAYER_IS_SQUARE){
				this.sprite = boxgear_square_sprite;
			}
			else if(player.currentType == PLAYER_IS_CIRCLE){
				this.sprite = boxgear_circle_sprite;
			}
			else if(player.currentType == PLAYER_IS_TRIANGLE){
				this.sprite = boxgear_triangle_sprite;
			}
		}
		else{
			//don't change sprites
		}
	};
	
	this.render = function(){
		renderEntity(this);
	};
	
	this.destroy = function(){
		entities.splice(entities.indexOf(this), 1);
	};

	return this;
}

function createBox(xpos,ypos,mutant,sprite){
	var x = xpos*SPRITE_SIZE;
	var y = (ypos*SPRITE_SIZE) + 64;
	//var position = xpos*7 + ypos;
	entities[entities.length] = new Box(x,y,mutant,sprite);
}
