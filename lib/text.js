class Text {
    constructor(textContent, textColor) {
        this.height = '100';
        this.width = '100';
        this.x = '150';
        this.y = '155';
        this.text = textContent
        this.color = textColor
    }

    render() {
    return `<text x="${this.x}" y="${this.y}" text-anchor="middle" font-size="30" fill="${this.color}">${this.text}</text> </svg>`;
    }
}

module.exports = {
    Text
  };