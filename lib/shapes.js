class SVGShape {
    constructor(shapeColor) {
      this.shapeType = "";
      this.shapeColor = shapeColor;
    }
  
    render() {
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">`;
    }
  }
  

class Circle extends SVGShape{
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeType = "circle";
        this.cx = '150';
        this.cy = '100';
        this.r= '100';
    }

    render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <${this.shapeType} cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}"> </${this.shapeType}>`;
    }
}

class Square extends SVGShape{
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeType = "rect";
        this.width = '200';
        this.height = '200';
    }

    render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <${this.shapeType} width="${this.width}" height="${this.height}" fill="${this.shapeColor}"> </${this.shapeType}>`;
    }
}
class Triangle extends SVGShape {
    constructor(shapeColor) {
      super(shapeColor);
      this.shapeType = "polygon";
      this.width = '200';
      this.height = '300';
      this.sideLength = this.width * Math.sqrt(3) / 2;
    }
  
    render() {
        const halfWidth = this.width / 2;
        const halfHeight = this.height / 2;
        const x1 = halfWidth;
        const y1 = halfHeight - this.sideLength / Math.sqrt(3);
        const x2 = halfWidth - this.width / 2;
        const y2 = halfHeight + this.sideLength / (2 * Math.sqrt(3));
        const x3 = halfWidth + this.width / 2;
        const y3 = halfHeight + this.sideLength / (2 * Math.sqrt(3));
    
        return `<svg version="1.1"
          width="${this.width}" height="${this.height}"
          xmlns="http://www.w3.org/2000/svg">
          <${this.shapeType} points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.shapeColor}"></${this.shapeType}>`;
      }
  }
