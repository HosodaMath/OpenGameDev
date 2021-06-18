export class Object2D {
  protected positionX: number;
  protected positionY: number;
  protected velocityX: number;
  protected velocityY: number;
  /**
   * @constructor
   * @param positionX
   * @param positionY
   * @param velocityX
   * @param velocityY
   */
  constructor(
    positionX: number,
    positionY: number,
    velocityX: number,
    velocityY: number
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  /**
   * @method
   * @description 現在位置の更新をおこなう
   */
  updatePosition = () => {
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;
  };
}
