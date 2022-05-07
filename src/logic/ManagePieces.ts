import Vector from './base/Vector'
import Piece from './objects/Piece'

export default class ManagePieces {
  constructor(
  ){}

  private pieces: Piece[] = [
    new Piece(
      new Vector(0, 0),
    [
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
    ])
  ]
  private currentPiece: Piece = this.pieces[0].getCopy()
}