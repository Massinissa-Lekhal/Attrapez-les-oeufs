import Mobile from "./mobile";
import rocketimg from "./assets/images/rocket128.png";

export default class Rocket extends Mobile{
    
    constructor(x,y,deltaX=6,deltaY=0){
        super(x,y,6,0,rocketimg);
    }
    
}