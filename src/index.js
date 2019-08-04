import p5 from 'p5';

class Sketch extends p5 {
  constructor() {
    super(() => {});
  }

  setup = () => {
    this.createCanvas(this.windowWidth, this.windowHeight);
  }

  draw = () => {
    this.background(238);
    this.noStroke();

    this.fill(23);
    this.ellipse(this.width / 2, this.height / 2, 400, 400);
  }
}

const sketch = new Sketch(); // eslint-disable-line
