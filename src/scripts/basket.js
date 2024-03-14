import Mobile from "./mobile";
import basketimg from "./assets/images/basket128.png";

const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2, UP : 3, DOWN : 4};

export default class Basket extends Mobile {

    constructor (x,y,deltaX,deltaY){
        super(x,y,deltaX,deltaY,basketimg);
        this.moving=MoveState.NONE;
    }

    moveLeft() {
        this.moving = MoveState.LEFT;
    }
    moveRight() {
        this.moving = MoveState.RIGHT;
    }
    moveUP() {
        this.moving = MoveState.UP;
    }
    moveDown(){
        this.moving = MoveState.DOWN;
    }
    
    move(box){
        if (this.moving === MoveState.LEFT) {
            this.x = Math.max(0, this.x - this.deltaX);
        }
        if (this.moving === MoveState.RIGHT) {
            this.x = Math.min(box.width - this.width, this.x + this.deltaX);
        }
        if (this.moving ===MoveState.UP){
            this.y=Math.max(0, this.y - this.deltaY);
        }
        if (this.moving ===MoveState.DOWN){
            this.y=Math.min(box.height - this.height, this.y + this.deltaY);
        }
    }
    

    stopMoving(){
        this.moving=MoveState.NONE;
    }

} 