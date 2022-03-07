import Compositor from './Compositor.js';
import { loadLevel} from './loader.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';


const canvas= document.getElementById("screen");
const context= canvas.getContext("2d");

function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        sprite.draw('idle', context, pos.x, pos.y);
    };
}

Promise.all([
    loadMarioSprite(),
    loadBackgroundSprites(),
     loadLevel('1-1'),
])
    .then(([marioSprite, backgroundSprites, level,]) =>{ 
        console,log('level loader', level);
        
        const comp = new Compositor();
        comp.layers.push(createBackgroundLayer(level.backgrounds, backgroundSprites));
   
    const pos ={
        x:64,
        y: 64,
    };

comp,layers,push(createSpriteLayer(marioSprite, pos));

function update(){
    comp.draw(context);
     pos.x += 2;
     pos.y += 2;
     requestAnimationFrame(update);
    }
     
    
   update();
    
});