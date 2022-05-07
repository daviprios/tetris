import Vector from '../base/Vector';

import Block from './Block'

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

const directionToIndex = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
}

export default class Piece {
  constructor(
    private layouts: [
      [Vector, Vector, Vector, Vector],
      [Vector, Vector, Vector, Vector],
      [Vector, Vector, Vector, Vector],
      [Vector, Vector, Vector, Vector]
    ],
  ){
    this.blocks = [
      new Block(),
      new Block(),
      new Block(),
      new Block(),
    ]

    this.blocks.forEach((block, index) => {
      const pos = this.layouts[directionToIndex[this.currentDirection]][index]
      pos.x += 4
      block.setPos(pos)
    })

    //this.anchor = this.blocks[0].getPos()
  }

  private blocks: [Block, Block, Block, Block]
  //private anchor: Vector
  private currentDirection: Direction = 'UP'

  move(direction: Direction): void {
    switch(direction) {
      case 'DOWN':
        //this.anchor.y += 1
        this.blocks.forEach(block => block.setPos(block.getPos().sub(new Vector(0, -1))))
        break
      case 'LEFT':
        //this.anchor.x -= 1
        this.blocks.forEach(block => block.setPos(block.getPos().sub(new Vector(1, 0))))
        break
      case 'RIGHT':
        //this.anchor.x += 1
        this.blocks.forEach(block => block.setPos(block.getPos().sub(new Vector(-1, 0))))
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

    this.blocks[1].setPos(this.layouts[directionToIndex[this.currentDirection]][1])
  }

  draw(): void {
    this.blocks.forEach(block => block.draw())
  }
}