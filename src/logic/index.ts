import Canvas from './base/Canvas'
import Vector from './base/Vector'
import ManagePieces from './ManagePieces'

import Piece from './objects/Piece'

const Game = (canvas: HTMLCanvasElement) => {
  Canvas.setCanvas(canvas)
  
  const size = 32
  Canvas.c.height = size * 20
  Canvas.c.width = size * 10

  const piece = new Piece(
    new Vector(4, 0),
    [
      [new Vector(0, 0), new Vector(0, 1), new Vector(1, 1), new Vector(2, 1)],
      [new Vector(1, 0), new Vector(2, 0), new Vector(1, 1), new Vector(1, 2)],
      [new Vector(0, 1), new Vector(1, 1), new Vector(2, 1), new Vector(2, 2)],
      [new Vector(1, 0), new Vector(1, 1), new Vector(1, 2), new Vector(0, 2)],
    ]
  )

  const clearWindow = () => {
    Canvas.context.fillStyle = '#AAAAAA'
    Canvas.context.fillRect(0, 0, Canvas.c.width, Canvas.c.height)
  }

  window.addEventListener('keydown', (e) => {
    if(!e.repeat)
      switch(e.key) {
        case 'ArrowUp':
          piece.rotate()
          break
        case 'ArrowDown':
          piece.move('DOWN')
          break
        case 'ArrowLeft':
          piece.move('LEFT')
          break
        case 'ArrowRight':
          piece.move('RIGHT')
          break
      }
  })

  const managePieces = new ManagePieces()

  let timeToDown = 0

  const update = () => {
    //Clear
    clearWindow()

    //Update
    if (timeToDown > 20){
      piece.move('DOWN')
      timeToDown = 0
    }
    timeToDown += 1

    //Draw
    piece.draw()
    
    //Request next frame
    requestAnimationFrame(update)
  }

  return update
}

export default Game