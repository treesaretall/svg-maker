[![Created by treesaretall](https://img.shields.io/badge/Generated%20by-treesaretall-blue)](https://github.com/treesaretall)
# Logo Generator App

This is a command-line application that generates a logo based on user input. The logo consists of a shape and text. The user can choose the characters, text color, shape type, and shape color for their logo.

## Installation

To use this application, you need to have [Node.js](https://nodejs.org) installed on your system. Follow these steps to install and run the app:

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the following command:
   ```
   npm install
   ```

## Usage
[Video Walkthrough](https://drive.google.com/file/d/1h_IJiHUI2M79uwR11zODcBMP-E6X9Fgn/view)

To run the logo generator, use the following command in the terminal:

```
node index.js
```

The application will prompt you with a series of questions to customize your logo:

1. **What characters would you like on your logo?** Enter the characters you want to appear on your logo. The maximum length allowed is 3.

2. **What color would you like your text to be?** Enter the color for the text of your logo. You can use either a color keyword or a hexadecimal value. The input will be validated to ensure it is a valid color.

3. **What shape would you like your logo to be?** Choose the shape for your logo from the provided list of options: Square, Triangle, or Circle.

4. **What color would you like your shape to be?** Enter the color for the shape of your logo. You can use either a color keyword or a hexadecimal value. The input will be validated to ensure it is a valid color.

After providing the required input, the application will generate an SVG file named `logo.svg` in the project directory. The SVG file will contain the rendered logo based on your input.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This application was built using the following libraries:

- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive command-line prompts.
- [fs](https://nodejs.org/api/fs.html) - For file system operations.
- [validate-color](https://www.npmjs.com/package/validate-color) - For color validation.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/your-repository).