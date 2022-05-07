import Canvas from '../base/Canvas'
import Vector from '../base/Vector'
import Rect from './Rect'

export default class Sprite {
  constructor (
    rect: Rect,
    image: HTMLImageElement
  ) {
    this.rect = rect
    this.image = image
  }

  rect: Rect
  image: HTMLImageElement

  setPos(newPosition: Vector): void {
    this.rect.pos = newPosition
  }

  getPos(): Vector {
    return this.rect.pos
  }

  getSize(): Vector {
    return this.rect.size
  }

  getRect(): Rect {
    return this.rect
  }

  draw() {
    Canvas.context.drawImage(this.image,
      this.rect.pos.x,
      this.rect.pos.y,
      this.rect.size.x,
      this.rect.size.y)
  }
}