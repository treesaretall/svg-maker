class SVGShape {
    constructor(shapeColor) {
      this.shapeType = "";
      this.shapeColor = shapeColor;
    }
  
    render() {
      return
    }
  }
  

class Circle extends SVGShape{
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeType = "circle";
        this.cx = '150';
        this.cy = '150';
        this.r= '100';
    }

    render() {
    return `<${this.shapeType} cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}"> </${this.shapeType}>`;
    }
}

class Square extends SVGShape{
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeType = "rect";
        this.width = '200';
        this.height = '200';
        this.x = '50';
        this.y = '50';
  }

  render() {
    return `<${this.shapeType} x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}"></${this.shapeType}>`;
    }
}


class Triangle extends SVGShape {
    constructor(shapeColor) {
      super(shapeColor);
      this.shapeType = "polygon";
      this.width = '200';
      this.height = '300';
      this.sideLength = this.width * Math.sqrt(3) / 2;
      this.x = '50'; 
      this.y = '0'; 
  }

  render() {
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    const x1 = halfWidth + parseInt(this.x);
    const y1 = halfHeight - this.sideLength / Math.sqrt(3) + parseInt(this.y);
    const x2 = halfWidth - this.width / 2 + parseInt(this.x);
    const y2 = halfHeight + this.sideLength / (2 * Math.sqrt(3)) + parseInt(this.y);
    const x3 = halfWidth + this.width / 2 + parseInt(this.x);
    const y3 = halfHeight + this.sideLength / (2 * Math.sqrt(3)) + parseInt(this.y);

    return `<${this.shapeType} points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.shapeColor}"></${this.shapeType}>`;
  }
  }

  module.exports = {
    SVGShape,
    Circle,
    Square,
    Triangle
  };