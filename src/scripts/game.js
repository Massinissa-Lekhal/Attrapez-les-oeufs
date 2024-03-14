import Basket from "./basket";
import Egg from "./egg";
import Rocket from "./rocket";

const eggEx= new Egg(0,0,0,0);
const rocketEx= new Rocket(0,0,0,0);

export default class Game {

    constructor(canvas){
        this.canvas=canvas;
        this.player=new Basket(this.canvas.width/2,this.canvas.height/2,10,10);
        this.raf=null;
        this.context=canvas.getContext("2d");
        this.eggs=[];
        this.rockets=[];
        this.inter_1=null;
        this.inter_2=null;
        this.score=0;
        this.life=3;
    }

    
    alea(n) {
        return Math.floor(Math.random() * n);
    }

    
    addEgg(){
        const canvasW=this.canvas.width;
        const canvasH=this.canvas.height;

        let x=this.alea(canvasW -eggEx.width)+1;
        let y=0;

        const nwegg = new Egg(x,y,0,4);
        this.proba=Math.random();
        if (this.proba < 0.75){
            this.eggs.push(nwegg);
        }
    }

    addRocket(){
        const canvasW=this.canvas.width;
        const canvasH=this.canvas.height;

        let x=0;
        let y=this.alea(canvasH - rocketEx.height)+1;

        const nwrocket= new Rocket(x,y,6,0);
        this.proba=Math.random();
        if (this.proba < 0,5){
            this.rockets.push(nwrocket);
        }
        

    }
    
    eggCollision(){
        this.eggs.forEach( elt => {
            if (this.player.collisionWith(elt)){
                this.score+=100;
                document.getElementById("score").textContent=this.score;
                //console.log(this.score);
            }
            return this.score;
        })
    }
    
    rocketCollision(){
        this.rockets.forEach( elt => {
            if (this.player.collisionWith(elt)){
                this.score-=500;
                document.getElementById("score").textContent=this.score;
                document.getElementById(`life-${this.life}`).style.display='none';
                this.life-=1;
                if(this.life===0){
                window.alert("perdu !!!!!!");
                location.reload();
                this.life=3;
                }
                //console.log(this.score);
            }
            return this.score;
        })
    }    

    moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.player.move(this.canvas);
        this.player.draw(this.context);
        this.eggs.forEach(elt => elt.move(this.canvas));
        this.eggs.filter(elt => elt.y < this.canvas.height);
        
        this.eggCollision(this.player);
        this.eggs=this.eggs.filter(elt => !(elt.collisionWith(this.player)) );

        this.rockets.forEach(elt => elt.move(this.canvas));
        this.rockets.filter(elt => elt.x < this.canvas.height);
        
        this.rocketCollision(this.player);
        this.rockets=this.rockets.filter(elt => !(elt.collisionWith(this.player))  );

        
        this.rockets.forEach(elt => {
            this.eggs=this.eggs.filter(eltm => !(elt.collisionWith(eltm)))
        } );
        

        this.rockets.forEach(elt => elt.draw(this.context));
        this.eggs.forEach(elt => elt.draw(this.context));

        this.raf=window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
    
    startAndStop() {
        if (this.raf == null){
          this.moveAndDraw();
          this.inter_1=setInterval(this.addEgg.bind(this),1000);
          this.inter_2=setInterval(this.addRocket.bind(this),1000);
        }
        else {
          window.cancelAnimationFrame(this.raf);
          clearInterval(this.inter_1);
          clearInterval(this.inter_2);
          this.raf=null;
          
        }
    }


    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.player.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.player.moveRight();
                break;

            case "ArrowUp":
            case "UP":
                this.player.moveUP();
                break;
            case "ArrowDown":
            case "DOWN":
                this.player.moveDown();
                break;

            default: return;
        }
        event.preventDefault();
    }


    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":
            case "ArrowUp":
            case "UP":
            case "ArrowDown":
            case "DOWN":
                this.player.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
    
}