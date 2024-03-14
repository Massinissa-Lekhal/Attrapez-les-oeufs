
export default class Mobile {

    constructor (x,y,deltaX=0,deltaY=0,imgsrc){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.img=this.#createImage(imgsrc);

    }

    draw(context) {
        context.drawImage(this.img,this.x,this.y);
    }
    

    move(canvas) {
        //const canvasW=canvas.width;
        //const canvasH=canvas.height;
        /*
        if (this.x + this.deltaX > canvasW - this.img.width || this.x + this.deltaX <0){
            this.deltaX=-this.deltaX;
        }
        if (this.y + this.deltaY > canvasH - this.img.height || this.y + this.deltaY <0){
            this.deltaY=-this.deltaY;
        }
        */
        this.x+=this.deltaX;
        this.y+=this.deltaY;
    }

    collisionWith(obstacle){
        let a1x=this.x;
        let a1y=this.y;
    
        let a2x=this.x + this.img.width;
        let a2y=this.y + this.img.height;
        
        let obs1x=obstacle.x;
        let obs1y=obstacle.y;
        
        let obs2x=obs1x + obstacle.width;
        let obs2y=obs1y + obstacle.height;
    
        let p1x = Math.max(a1x,obs1x);
        let p1y= Math.max(a1y,obs1y);
        
        let p2x = Math.min(a2x,obs2x);
        let p2y= Math.min(a2y,obs2y); 
    
        return (p1x<p2x & p1y<p2y);
    }


    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    get width(){
        return this.img.width;
    }

    get height(){
        return this.img.height;
    }
}