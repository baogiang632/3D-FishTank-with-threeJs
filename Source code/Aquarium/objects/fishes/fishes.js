import * as Fish1 from "./fish1.js";
import * as Fish2 from "./fish2.js";
import * as Fish3 from "./fish3.js";
import * as Fish4 from "./fish4.js";
import * as Fish5 from "./fish5.js";
import * as Fish6 from "./fish6.js";
import * as Fish7 from "./fish7.js";
import * as Fish8 from "./fish8.js";
import * as Fish9 from "./fish9.js";
import * as Fish10 from "./fish10.js";
import * as Starfish from "./starfish.js";

let starfish;
let fishes = [10];
let fishes_ = [10];
let speed = 0;

export class Fishes {
  createFishes(scenes) {
    fishes[0] = new Fish1.Fish();
    fishes_[0] = fishes[0].fishObj;
    fishes_[0].castShadow = true;
    fishes_[0].receiveShadow = true;
    scenes.add(fishes_[0]);

    fishes[1] = new Fish2.Fish();
    fishes_[1] = fishes[1].fishObj;
    fishes_[1].castShadow = true;
    fishes_[1].receiveShadow = true;
    scenes.add(fishes_[1]);

    fishes[2] = new Fish3.Fish();
    fishes_[2] = fishes[2].fishObj;
    fishes_[2].castShadow = true;
    fishes_[2].receiveShadow = true;
    scenes.add(fishes_[2]);

    fishes[3] = new Fish4.Fish();
    fishes_[3] = fishes[3].fishObj;
    fishes_[3].castShadow = true;
    fishes_[3].receiveShadow = true;
    scenes.add(fishes_[3]);

    fishes[4] = new Fish5.Fish();
    fishes_[4] = fishes[4].fishObj;
    fishes_[4].castShadow = true;
    fishes_[4].receiveShadow = true;
    scenes.add(fishes_[4]);

    fishes[5] = new Fish6.Fish();
    fishes_[5] = fishes[5].fishObj;
    fishes_[5].castShadow = true;
    fishes_[5].receiveShadow = true;
    scenes.add(fishes_[5]);

    fishes[6] = new Fish7.Fish();
    fishes_[6] = fishes[6].fishObj;
    fishes_[6].castShadow = true;
    fishes_[6].receiveShadow = true;
    scenes.add(fishes_[6]);

    fishes[7] = new Fish8.Fish();
    fishes_[7] = fishes[7].fishObj;
    fishes_[7].castShadow = true;
    fishes_[7].receiveShadow = true;
    scenes.add(fishes_[7]);

    fishes[8] = new Fish9.Fish();
    fishes_[8] = fishes[8].fishObj;
    fishes_[8].castShadow = true;
    fishes_[8].receiveShadow = true;
    scenes.add(fishes_[8]);

    fishes[9] = new Fish10.Fish();
    fishes_[9] = fishes[9].fishObj;
    fishes_[9].castShadow = true;
    fishes_[9].receiveShadow = true;
    scenes.add(fishes_[9]);

    starfish = new Starfish.Starfish();
    scenes.add(starfish.fishObj);

    return scenes;
  }

  move() {
    const timer = Date.now() * 0.0001;
    speed += 0.001;

    /* Fish 1 */
    {
      //console.log("좌표", fishes_[0].position);
      fishes_[0].position.x = 10 * Math.cos(speed);
      fishes_[0].position.y = -10 + 25 * Math.cos(speed);
      fishes_[0].rotation.y = timer * fishes[0].speed;
    }

    /* Fish 2 */
    {
      fishes_[1].position.x = 25 * Math.cos(speed);
      fishes_[1].position.y = -10 + 25 * Math.cos(speed);
      fishes_[1].rotation.y = -(timer * fishes[1].speed);
    }

    /* Fish 3 */
    {
      fishes_[2].position.x = 25 * Math.cos(speed);
      fishes_[2].position.y = -10 + 25 * Math.cos(speed);
      fishes_[2].rotation.y = -(timer * fishes[2].speed);
    }

    /* Fish 4 */
    {
      fishes_[3].position.x = 25 * Math.cos(speed);
      fishes_[3].position.y = -10 + 25 * Math.cos(speed);
      fishes_[3].rotation.y = timer * fishes[3].speed;
    }

    /* Fish 5 */
    {
      fishes_[4].position.x = -50 * Math.cos(speed);
      fishes_[4].position.y = -10 + 25 * Math.cos(speed);
      fishes_[4].rotation.y = -timer * fishes[4].speed;
    }

    /* Fish 6 */
    {
      fishes_[5].position.x = 50 * Math.cos(speed);
      fishes_[5].position.y = -10 + 25 * Math.cos(speed);
      fishes_[5].rotation.y = -timer * fishes[5].speed;
    }

    /* Fish 7 */
    {
      fishes_[6].position.x = 70 * Math.cos(speed);
      fishes_[6].position.y = -10 + 30 * Math.cos(speed);
      fishes_[6].rotation.y = timer * fishes[6].speed;
    }

    /* Fish 8 */
    {
      fishes_[7].position.x = 55 * Math.cos(speed);
      fishes_[7].position.y = 20 + 40 * Math.cos(speed);
      fishes_[7].rotation.y = timer * fishes[7].speed;
    }
    
    /* Fish 9 */
    {
      fishes_[8].position.x = -55 * Math.cos(speed);
      fishes_[8].position.y = 20 + 40 * Math.cos(speed);
      fishes_[8].rotation.y = timer * fishes[8].speed;
    }

    /* Fish 10 */
    {
      fishes_[9].position.x = -30 * Math.cos(speed);
      fishes_[9].position.y = 20 + 40 * Math.cos(speed);
      fishes_[9].rotation.y = timer * fishes[9].speed;
    }
  }
}
