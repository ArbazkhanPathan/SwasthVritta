import "./product.css";

export const Product = (props) => {

      return (
        <div id='product'>
          <h1>Product</h1>

          {/* <video id="videoBG" autoPlay muted loop>
            <source href='img/videos/bottle_anim0001-0060.mkv' type="video/mp4"/>
      </video>      */}

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Product Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="product.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
          <div className="card-wrapper">
            <div className="card">
              {/* card left */}
              <div className="product-imgs">
                <div className="img-display">
                  <div className="img-showcase">
                    <img src="img/Product/eucalyptus/Eoil4.jpg" alt="image" />
                    <img src="img/Product/eucalyptus/Eoil1.jpg" alt="image" />
                    <img src="img/Product/eucalyptus/Eoil2.jpg" alt="image" />
                    <img src="img/Product/eucalyptus/Eoil3.jpg" alt="image" />
                  </div>
                </div>
                <div className="img-select">
                  <div className="img-item">
                    <a href="#" data-id={1}>
                      <img src="img/Product/eucalyptus/Eoil4" alt="image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={2}>
                      <img src="checked.png" alt="image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={3}>
                      <img src="checked.png" alt="image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={4}>
                      <img src="checked.png" alt="image" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h2 className="product-title">Heel Eucalyptus Roll On</h2>
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span>4.7(21)</span>
                </div>
                <div className="product-price">
                  <p className="last-price">Old Price: <span>257.00</span></p>
                  <p className="new-price">New Price: <span>₹ 249.00 (5%)</span></p>
                </div>
                <div className="product-detail">
                  <h2>about this item: </h2>
                  <p>Eucalyptus oil is available as an essential oil that is used as a medicine to treat a variety of common diseases and conditions including nasal congestion, asthma, and as a tick repellant. Diluted eucalyptus oil may also be applied to the skin as a remedy for health problems such as arthritis and skin ulcers. Eucalyptus oil is also used to ease cold symptoms and provide respiratory health benefits.</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p> */}
                  <ul>
                    <h3> Benefits</h3>
                    <li>Cough and cold </li>
                    <li>Migrane and headache </li>
                    <li>Sinus and asthma </li>
                    <li>Acne and Skin </li>
                    <li>Bug repellent </li>
                    <li>Muscle/Joint pain </li>
                    {/* <li>Color: <span>Black</span></li>
                    <li>Available: <span>in stock</span></li>
                    <li>Category: <span>Shoes</span></li>
                    <li>Shipping Area: <span>All over the world</span></li>
                    <li>Shipping Fee: <span>Free</span></li> */}

                     
                  </ul>
                </div>
                <div className="purchase-info">
                  <input type="number" min={0} defaultValue={1} />
                  <button type="button" className="btn">
                    Add to Cart <i className="fas fa-shopping-cart" />
                  </button>
                  <button type="button" className="btn">Compare</button>
                </div>
                {/* <div className="social-links">
                  <p>Share At: </p>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    }

