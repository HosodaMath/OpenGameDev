import * as P5 from "p5";
import { Player } from "./player";
import { Block } from "./block";
import "sanitize.css";
import "./main.css";

const start_button = document.querySelector("#start_button");
if (!start_button) {
  throw new Error("Error");
}

start_button.addEventListener("click", async () => {
  const overlay = document.querySelector("#overlay");
  if (!overlay) {
    throw new Error("Error");
  }
  overlay.remove();

  const sketch = (p: P5) => {
    let player: Player;
    let blocks: Block[] = [];

    const createBlockPair = () => {
      const y = p.random(-100, 100);
      const startX = p.windowWidth + 100;
      blocks.push(new Block(startX, y, -2, 0));
      blocks.push(new Block(startX, y + 600, -2, 0));
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.rectMode(p.CENTER);
      p.noStroke();

      player = new Player();
    };

    const background = () => {
      p.background("#95c4fc");
    };

    const renderPlayer = () => {
      player.updatePosition();
      player.applyGravity();
      player.drawPlayer(p);
    };

    /**
     * 一定間隔でブロックを追加と削除をおこなう
     */
    const addBlock = () => {
      if (p.frameCount % 120 === 1) {
        createBlockPair();
      }

      // ブロックが規定数に達したら自動で破棄する
      if (blocks.length > 30) {
        blocks.splice(0, 1);
      }
    };

    const renderBlock = () => {
      [...Array(blocks.length).keys()].forEach((count) => {
        blocks[count].updatePosition();
        blocks[count].drawBlock(p);
      });
    };

    p.draw = () => {
      background();
      renderPlayer();
      addBlock();
      renderBlock();
    };

    p.windowResized = () => {
      p.createCanvas(p.width, p.height);
    };

    p.mousePressed = () => {
      player.applyJump();
    };

    /**
     * ブロックが破棄されているかどうか確認
     */
    p.keyTyped = () => {
      console.log(`blocks: ${blocks.length}`);
    };
  };

  new P5(sketch);
});
