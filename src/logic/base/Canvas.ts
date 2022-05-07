export default class Canvas {
  static c: HTMLCanvasElement
  static context: CanvasRenderingContext2D

  static setCanvas(canvas: HTMLCanvasElement) {
    this.c = canvas
    this.context = canvas.getContext('2d') ?? new CanvasRenderingContext2D()
  }
}