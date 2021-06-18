import * as P5 from "p5";
import { Object2D } from "./object2d";

export class Block extends Object2D {
  /**
   * @constructor
   */
  constructor(
    positionX: number,
    positionY: number,
    velocityX: number,
    velocityY: number
  ) {
    super(positionX, positionY, velocityX, velocityY);
  }

  /**
   * @description ブロックが生存圏ないかどうか判定
   * @returns 
   */
  blockAlive = () => {
    return -100 < this.positionX;
  };

  /**
   * @description ブロックを描画
   * @param p
   */
  drawBlock = (p: P5) => {
    p.fill("#ffffff");
    p.rect(this.positionX, this.positionY, 80, 400);
  };
}
