import Mobile from "./mobile";
import blueeggimg from "./assets/images/blue-egg64.png";
import greeneggimg from "./assets/images/green-egg64.png";
import yelloweggimg from "./assets/images/yellow-egg64.png"; 


export default class Egg extends Mobile{

    constructor(x,y,deltaX=0,deltaY=4){
        let res=Math.floor(Math.random() *3);
        if (res==0){
            super(x,y,0,4,blueeggimg);
        }
        if (res==1){
            super(x,y,0,4,greeneggimg);
        }
        if (res==2){
            super(x,y,0,4,yelloweggimg);
        }      
    }
    /*
    move(){
        this.x+=this.deltaX;
        this.y+=this.deltaY;
    }
    */
}