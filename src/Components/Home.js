import React from "react";

function Home(){

    return (
        <div className="home-wrapper">
          <img
            className="home-image"
            src={ require('./Pizza.jpg') }
            alt=""
          />
        </div>
      );

}

export default Home;