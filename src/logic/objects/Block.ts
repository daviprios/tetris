import Vector from '../base/Vector'

import Rect from '../components/Rect'
import Sprite from '../components/Sprite'

import imageBlock from '../../assets/block.png'

const blockSize = 32

export default class Block {
  constructor() {
    const image = new Image()
    image.src = imageBlock
    this.sprite = new Sprite(
      new Rect(
        new Vector(0, 0),
        new Vector(32, 32)
      ),
      image
    )
  }

  private isMoving: boolean = true
  private sprite: Sprite

  setPos(newPosition: Vector): void {
    newPosition = newPosition.mul(blockSize)
    this.sprite.setPos(newPosition)
  }

  getPos(): Vector {
    return this.sprite.getPos().div(blockSize)
  }

  getIsMoving(): boolean {
    return this.isMoving
  }

  setIsMoving(isMoving: boolean): void {
    this.isMoving = isMoving
  }

  draw(): void {
    this.sprite.draw()
  }
}