
// importation de la classe Game.js
import Basket from './basket';
import Game from './game';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
  const canvas = document.getElementById("playfield");
  
  //const basket = new Basket(canvas.width/2,canvas.height/2);
  //document.getElementById("stopAndStartGame").addEventListener("click",() => basket.draw(canvas.getContext('2d')) );
  const game = new Game(canvas);
  document.getElementById("stopAndStartGame").addEventListener("click",() => game.startAndStop()   );
  window.addEventListener("keydown",game.keyDownActionHandler.bind(game) );
  window.addEventListener("keyup",game.keyUpActionHandler.bind(game)  );
  
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
