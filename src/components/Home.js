import React from "react";
import "../css/Home.css";
import Banner from "../images/banner.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={Banner} alt="banner" className="home__image" />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup - How Consitant Innovation Creates Minds"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
            price={299.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            image="https://images-na.ssl-images-amazon.com/images/I/71-n%2B9VW%2BeL._AC_SL1500_.jpg"
            price={49.99}
            rating={3}
          />
          <Product
            title="Ailun Glass Screen Protector for iPhone 11/iPhone XR 6.1 Inch 3 Pack Tempered Glass Screen Protector for Apple iPhone 11/iPhone XR 6.1 Inch Display Anti Scratch Advanced HD Clarity Work Most Case"
            id="4"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81fjSKzFgeL._AC_SL1500_.jpg"
            rating={2}
          />
          <Product
            title="ASUS L203MA-DS04 VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage, USB-C, Windows 10 Home In S Mode, Up To 10 Hours Battery Life, One Year of Microsoft 365"
            id="5"
            price={284.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SL1500_.jpg"
            rating={6}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
            price={349.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
