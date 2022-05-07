export default class Vector {
  public x: number
  public y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  public add (vector: Vector): Vector {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  public sub (vector: Vector): Vector {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }

  public mul (scalar: number): Vector {
    this.x *= scalar
    this.y *= scalar
    return this
  }

  public div (scalar: number): Vector {
    this.x /= scalar
    this.y /= scalar
    return this
  }
}