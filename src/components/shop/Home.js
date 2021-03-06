import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Candles (Pack of 4) "
            price={400}
            rating={5}
            image="./product_images/c9.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Candles (single) "
            price={400}
            rating={4}
            image="./product_images/c9.jpeg "
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Bath Salt 100g Lavendar"
            price={250}
            rating={5}
            image="./product_images/lavendar.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Bath Salt 200g Lavendar"
            price={400}
            rating={4}
            image="./product_images/lavendar.jpeg "
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Bath Salt 100g LEMONGRASS"
            price={250}
            rating={5}
            image="./product_images/lemongrass.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Bath Salt 200g LEMONGRASS"
            price={400}
            rating={4}
            image="./product_images/lemongrass.jpeg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Bath Salt 100g EUCALYPTUS"
            price={250}
            rating={5}
            image="./product_images/eucalyptus.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Bath Salt 200g EUCALYPTUS"
            price={400}
            rating={4}
            image="./product_images/eucalyptus.jpeg" />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Bath Salt 100g pepermint"
            price={250}
            rating={5}
            image="./product_images/pepermint.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Bath Salt 200g CEDARWOOD"
            price={400}
            rating={4}
            image="./product_images/pepermint.jpeg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Cloud9 Aromatherapy Bath Salt 100g ROSEMARY"
            price={250}
            rating={5}
            image="./product_images/rose.jpeg"
          />
          <Product
            id="49538094"
            title="Cloud9 Aromatherapy Bath Salt 200g ROSEMARY"
            price={400}
            rating={4}
            image="./product_images/rose.jpeg"
          />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
