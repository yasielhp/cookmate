# CookMate

![Logo CookMate](/client/public/cover.png)
This repository contains the code for a web application that allows users to generate recipes based on the ingredients they want. The application uses Vite.js as the development environment and [React.js](https://beta.reactjs.org/) as the framework for the graphical interface. [Tailwind CSS](https://tailwindcss.com/) is used as the styling framework, and [React Router DOM](https://reactrouter.com/en/main) for navigation management.

On the backend, [Node.js](https://nodejs.org/es/) and [Express.js](https://expressjs.com/) are used to create a web server, [MongoDB](https://www.mongodb.com/) to store the application's data and [OpenAI]https://openai.com/() for image generation. In addition, [Cohere.ai](https://cohere.ai/) is used for recipe generation.

![Application interface](/client/public/ui.jpg)

The design of the application was created in [Figma](https://www.figma.com/), the link to the design can be found [here](https://www.figma.com/file/qesy1MrZhwY0NpAfxw2DrU/Hackathon-%7C-CookMate?node-id=39%3A441&t=dK5i1pDyGaRwceaS-1).


##Installation
To install and run this application on your local environment, follow these steps:

1. Clone this repository to your local machine:
   `git clone https://github.com/yasielhp/cookmate`
2. Navigate to the project folder and install the required dependencies:
   `cd recipe-generator`
   `npm install`
3. Start the application:
   `npm run dev`


The application will run at `http://localhost:5173/` in your browser.

##Usage

1. Enter your name.
2. Type or scan the ingredients you want to use to generate the recipe.
3. Select the number of people for the recipe.
4. Select if you want to generate the image of the recipe as well.
5. Press the "Generate" button.

The application will generate a recipe and a corresponding recipe image.


##Contribution

If you want to contribute to this project, follow these guidelines:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/feature-name).
3. Commit your changes (git commit -am 'Description of changes').
4. Push to the branch (git push origin feature/feature-name).
5. Create a pull request.


##Licencia

This project is licensed under the _[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/)._