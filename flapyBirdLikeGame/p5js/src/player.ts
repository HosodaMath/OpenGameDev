import * as P5 from "p5";
import { Object2D } from "./object2d";
class Player extends Object2D {
  /**
   * @constructor
   * コンストラクタでプレイヤーを初期化する
   */
  constructor() {
    super(200, 300, 0, 0);
  }

  /**
   * @method
   * @description 常に重力の値は適用され続ける。
   */
  applyGravity = () => {
    this.velocityY += 0.15;
  };

  /**
   * @method
   * @description ジャンプする
   */
  applyJump = () => {
    this.velocityY -= 5.0;
  };

  /**
   * @method
   * @description プレイヤーの描画
   * @param p
   */
  drawPlayer = (p: P5) => {
    p.fill("#ffe6f7");
    p.rect(this.positionX, this.positionY, 40, 40);
  };
}

export { Player };
