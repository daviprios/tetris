import Canvas from './base/Canvas'
import Vector from './base/Vector'

import Piece from './objects/Piece'

const Game = (canvas: HTMLCanvasElement) => {
  Canvas.setCanvas(canvas)
  
  const size = 32
  Canvas.c.height = size * 20
  Canvas.c.width = size * 10

  const piece = new Piece(
    [
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
      [new Vector(0, 0), new Vector(1, 0), new Vector(0, 1), new Vector(1, 1)],
    ]
  )

  const clearWindow = () => {
    Canvas.context.fillStyle = '#AAAAAA'
    Canvas.context.fillRect(0, 0, Canvas.c.width, Canvas.c.height)
  }

  let timeToDown = 0
  let timeToRight = 0

  const update = () => {
    //Clear
    clearWindow()

    //Update
    if (timeToDown > 200){
      piece.move('DOWN')
      timeToDown = 0
    }
    timeToDown += 1

    if (timeToRight > 300){
      piece.move('RIGHT')
      timeToRight = 0
    }
    timeToRight += 1

    //Draw
    piece.draw()
    
    //Request next frame
    requestAnimationFrame(update)
  }

  return update
}

export default Game