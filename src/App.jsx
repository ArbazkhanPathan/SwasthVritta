import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import Aboutus from "./components/aboutus";
import Blog from "./components/blog";
import Achievements from "./components/achievement";
import Photos from "./components/photos";
import Videos from "./components/videos";
import SocialMedia from "./components/Socialmedia";
import MapContainer from "./components/map";
// import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Product } from "./components/product";
import { Team } from "./components/Team";
import Counting from "./components/counting";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import Routepage from "./components/Route";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
      <Navigation />
      <Switch>
          <Route exact path="/"> <SocialMedia  /> <Header  data={landingPageData.Header} /> <Features  />  <About data={landingPageData.About}/>  <Counting data={landingPageData.Counting} />
  
          
          </Route>
          <Route exact path="/gallery"> <Gallery  />
          </Route>
          <Route exact path="/blog"> <Blog  />
          </Route>
          <Route exact path="/map"> <MapContainer  />
          </Route>
          <Route exact path="/achievement"> <Achievements  />
          </Route>
          <Route exact path="/photos"> <Photos />  
          </Route>
          <Route exact path="/videos"> <Videos />  
          </Route>
          
          <Route exact path="/aboutus"> <Aboutus data={landingPageData.About}/> <Team data={landingPageData.Team} />
          </Route>
          <Route exact path="/counting"> <Counting />
          </Route>
          <Route exact path="/product"> <Product />
          </Route>
          <Route exact path="/Team"> <Team />
          </Route>
          
        </Switch>
        <Contact data={landingPageData.Contact} />
      {/* <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} /> */}
      {/* <Routepage/> */}
      {/* <Counting data={landingPageData.Counting} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Product data={landingPageData.Product} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
      </Router>
    </div>
  );
};

export default App;


