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
    const pos = new Vector(this.rect.pos.x, this.rect.pos.y)
    return pos
  }

  getSize(): Vector {
    const size = new Vector(this.rect.size.x, this.rect.size.y)
    return size
  }

  getRect(): Rect {
    const pos = this.getPos()
    const size = this.getSize()
    const rect = new Rect(pos, size)
    return rect
  }

  draw() {
    Canvas.context.drawImage(
      this.image,
      this.rect.pos.x,
      this.rect.pos.y,
      this.rect.size.x,
      this.rect.size.y
    )
  }
}