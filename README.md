# React-Practical-1

For this Practical, I have created a small <strong>React App</strong> from scratch. 
<br><br>The steps involved in it are as follows:
1. First of all, in the terminal run the command ```npm init -y``` to create the package.json file, which holds the information about our project.
2. Then, run the command ```npm install react react-dom``` to install react-dom for our App, which will create the package.lock.json and node modules for us.
3. Then, we will install the babel webpack. For this, run the command ```npm install @babel/core @babel/preset-env @babel/preset-react babel-loader```.
<br>Babel core is the basic package.
<br>preset-env basically allows you to use modern javascript and transpiles it to the older javascript code.
<br>preset-react basically allows you to take JSX code and return it to vanilla react.
<br>Babel-loader is intermediary package that connects babel to webpack.
<br>Webpack takes all the react code and all the dependencies that we are using and it jumbles it up with our react code to push up a final javascript file that contains everything to make it work on all the browsers.
4. Then create a file named .babelrc and include the content in it.
5. Then run the command ```npm install webpack webpack-cli webpack-dev-server``` to install the webpacks and it creates a file named webpack.config.js.
In this, we will configure the entry points and the extensions to see a file.
6. Then, create a folder named src and create the files App.js and index.js in it.
7. Make necessary changes in the file and configure it properly.
8. Then, we will run the command ```npm install html-webpack-plugin``` to install the plugins.
9. And then finally we will run the command ```npm run build``` to build the project and ```npm start``` to start our project.
10. Then, we install the css loaders ```npm install style-loader css-loader``` to make our styles work in our project.
11. Then, to include the image in our project we have to install the file loaders by running the command ```npm install --dev file-loader```.

## Screenshot
![Screenshot from 2023-04-24 11-42-23](https://user-images.githubusercontent.com/122269010/233913700-4c3ffedf-c1d1-4b22-b25e-05e08db6e60d.png)

## Check Live
https://enchanting-cheesecake-b42a6c.netlify.app/
