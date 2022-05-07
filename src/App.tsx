import { useEffect, useRef } from 'react'
import Game from './logic'

const App = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if(canvas.current !== null) {
      const update = Game(canvas.current)
      update && requestAnimationFrame(update)
    }
  }, [canvas])

  return (
    <canvas ref={canvas} />
  )
}

export default App