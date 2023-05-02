# React-Practical-1

For this Practical, I have created a small <strong>React App</strong> from scratch. 

## :wrench: Installation Steps: 
<h4> :white_check_mark: Clone the Repository</h4>

```
git clone https://github.com/anjali-sim/React-Practical-1.git
```

<h4> :white_check_mark: Change the working directory</h4>

``` 
cd React-Practical-1 
```

<h4> :white_check_mark: Install Dependencies</h4>

```
npm i
```

<h4> :white_check_mark: Build App</h4>

```
npm run build
```

<h4> :white_check_mark: Start App</h4>

```
npm start
```
Now, you are all set!!! Open the localhost to view the app.

<br>
The steps involved in it are as follows:<br>
1. First of all, in the terminal run the command <strong>npm init -y</strong> to create the package.json file, which holds the information about our project.<br><br>
2. Then, run the command <strong>npm install react react-dom</strong> to install react-dom for our App, which will create the package.lock.json and node modules for us.<br><br>
3. Then, we will install the babel webpack. For this, run the command <strong>npm install @babel/core @babel/preset-env @babel/preset-react babel-loader</strong>.
<br>Babel core is the basic package.
<br>preset-env basically allows you to use modern javascript and transpiles it to the older javascript code.
<br>preset-react basically allows you to take JSX code and return it to vanilla react.
<br>Babel-loader is intermediary package that connects babel to webpack.
<br>Webpack takes all the react code and all the dependencies that we are using and it jumbles it up with our react code to push up a final javascript file that contains everything to make it work on all the browsers.<br><br>
4. Then create a file named .babelrc and include the content in it.<br><br>
5. Then run the command <strong>npm install webpack webpack-cli webpack-dev-server</strong> to install the webpacks and it creates a file named webpack.config.js. In this, we will configure the entry points and the extensions to see a file.<br><br>
6. Then, create a folder named src and create the files App.js and index.js in it.<br><br>
7. Make necessary changes in the file and configure it properly.<br><br>
8. Then, we will run the command <strong>npm install html-webpack-plugin</strong> to install the plugins.<br><br>
9. And then finally we will run the command <strong>npm run build</strong> to build the project and <strong>npm start</strong> to start our project.<br><br>
10. Then, we install the css loaders <strong>npm install style-loader css-loader</strong> to make our styles work in our project.<br><br>
11. Then, to include the image in our project we have to install the file loaders by running the command <strong>npm install --dev file-loader</strong>.<br><br>

## :camera_flash: Screenshot
![Screenshot from 2023-04-24 11-42-23](https://user-images.githubusercontent.com/122269010/233913700-4c3ffedf-c1d1-4b22-b25e-05e08db6e60d.png)

## :rocket: Check Live
https://enchanting-cheesecake-b42a6c.netlify.app/
