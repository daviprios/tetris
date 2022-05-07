import Vector from '../base/Vector'

export default class Rect {
  public pos: Vector
  public size: Vector

  constructor(pos: Vector, size: Vector) {
    this.pos = pos
    this.size = size
  }
}