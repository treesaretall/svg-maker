<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="100" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

class SVGShape {
    constructor(shapeType, width, height, fillColor) {
      this.shapeType = shapeType;
      this.width = width;
      this.height = height;
      this.fillColor = fillColor;
    }
  
    render() {
      // Generate SVG markup for the shape based on its properties
      // For example:
      return `<${this.shapeType} width="${this.width}" height="${this.height}" fill="${this.fillColor}"></${this.shapeType}>`;
    }
  }