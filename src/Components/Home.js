import React from "react";

function Home(){

    return (
        <div className="home-wrapper">
          <img
            className="home-image"
            src="Pizza.jpg"
            alt=""
          />
          <button className="order-button">Order Now!</button>
        </div>
      );

}

export default Home;