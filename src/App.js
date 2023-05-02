import React from "react";
import "App.css";
import image from "./assets/images/image.jpg";

const App = () => {
  return (
    <>
      <h1 className="textcolor">Hello React</h1>
      <div id="center">
        <p>
          This is my <strong>First React App</strong> from scratch. For this
          practical, I have created the whole App from scratch, by installing
          all the packages and webpack. I have installed the css-loader to make
          the css work and also installed file-loader to include the images in
          the App.
        </p>
      </div>
      <div id="centered">
        <img src={image} alt="Motivational Quote" />
      </div>
    </>
  );
};

export default App;
