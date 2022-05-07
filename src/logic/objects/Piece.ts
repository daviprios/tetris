import Vector from '../base/Vector';

import Block from './Block'

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
type PieceLayouts = [PieceLayout, PieceLayout, PieceLayout, PieceLayout]
type PieceLayout = [Vector, Vector, Vector, Vector]

const directionToIndex = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
}

export default class Piece {
  constructor(
    private anchor: Vector,
    private layouts: PieceLayouts,
  ){
    this.anchor = anchor

    this.blocks = [
      new Block(),
      new Block(),
      new Block(),
      new Block(),
    ]

    this.blocks.forEach((block, index) => {
      block.setPos(
        this.layouts[directionToIndex[this.currentDirection]][index].getCopy()
          .add(this.anchor.getCopy())
      )
    })
  }

  private blocks: [Block, Block, Block, Block]
  private currentDirection: Direction = 'UP'

  move(direction: Exclude<Direction, 'UP'>): void {
    let offset: Vector
    switch(direction) {
      case 'DOWN':
        offset = new Vector(0, 1)
        this.anchor.add(offset)
        this.blocks.forEach(block => {
          block.setPos(block.getPos().add(offset))
        })
        break
      case 'LEFT':
        offset = new Vector(-1, 0)
        this.anchor.add(offset)
        this.blocks.forEach(block => {
          block.setPos(block.getPos().add(offset))
        })
        break
      case 'RIGHT':
        offset = new Vector(1, 0)
        this.anchor.add(offset)
        this.blocks.forEach(block => {
          block.setPos(block.getPos().add(offset))
        })
        break
      default:
        break
    }
  }

  rotate(): void {
    switch(this.currentDirection) {
      case 'UP':
        this.currentDirection = 'RIGHT'
        break
      case 'RIGHT':
        this.currentDirection = 'DOWN'
        break
      case 'DOWN':
        this.currentDirection = 'LEFT'
        break
      case 'LEFT':
        this.currentDirection = 'UP'
        break
      default:
        break
    }

    this.blocks[0].setPos(
      this.layouts[directionToIndex[this.currentDirection]][0].getCopy()
        .add(this.anchor.getCopy())
    )
    this.blocks[1].setPos(
      this.layouts[directionToIndex[this.currentDirection]][1].getCopy()
        .add(this.anchor.getCopy())
    )
    this.blocks[2].setPos(
      this.layouts[directionToIndex[this.currentDirection]][2].getCopy()
        .add(this.anchor.getCopy())
    )
    this.blocks[3].setPos(
      this.layouts[directionToIndex[this.currentDirection]][3].getCopy()
        .add(this.anchor.getCopy())
    )
  }

  getCopy(): Piece {
    const layout: PieceLayouts =
      this.layouts.map((layout: PieceLayout) => 
        layout.map(vector => vector.getCopy())
      )

    return new Piece(this.anchor.getCopy(), layout)
  }

  draw(): void {
    this.blocks.forEach(block => block.draw())
  }
}