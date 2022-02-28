import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import Aboutus from "./components/aboutus";
import Blog from "./components/blog";
import Namaste from "./components/namaste";
import Achievements from "./components/achievement";
import Photos from "./components/photos";
import Map from "./components/map";
import Slider from "./components/slider";
import Videos from "./components/videos";
import SocialMedia from "./components/Socialmedia";
import MapContainer from "./components/map";
// import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Product } from "./components/product";
import { Team } from "./components/Team";
// import Prakriti1, { Prakriti } from "./components/Prakriti";
import Prakriti1 from "./components/prakriti";
import Counting from "./components/counting";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";
import "./loading.css"
import "./components/shop/App"
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false)
    }, 7500)
  }, []);
  
  

  
  return (
    <div>
      {
        loading ? 
        <div className="loadingScreen">
          {/* <img id="namaste" src="https://cdn5.vectorstock.com/i/1000x1000/15/09/namaste-yoga-logo-template-vector-34871509.jpg" /> */}
          {/* <img src="https://c.tenor.com/eYRNL1In-ooAAAAC/namaste-covid.gif" />   */}
          {/* <img src="https://raw.githubusercontent.com/ptbhatcoder/ptbhatcoder/main/emoji-gifs/namaste.gif" />   */}
          {/* <img src="https://c.tenor.com/0XRyFZlKl6wAAAAM/namaste-hello.gif" />   */}
          <img src="https://media1.giphy.com/media/ZTJVto8oNzqmPj8zDL/200w.gif" />  
          {/* <img id="namaste" src="https://tenor.com/bifVn.gif" /> */}
          
          {/* <HashLoader color={'#ffbb00'} loading={loading} size={150} /> */}
        </div>
        :
        console.log("done")
        // loading(false)
        
        
      }
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/"> <SocialMedia  /> <Slider /><Header  data={landingPageData.Header} /> <Features  />  <About data={landingPageData.About}/>  <Counting data={landingPageData.Counting} />  <Map />  <Contact data={landingPageData.Contact} />
  
          
          </Route>
          <Route exact path="/gallery"> <Gallery  /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/blog"> <Blog  /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/map"> <MapContainer  /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/achievement"> <Achievements  /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/photos"> <Photos />   <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/videos"> <Videos />   <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/namaste"> <Namaste />   <Contact data={landingPageData.Contact} />
          </Route>
          
          <Route exact path="/aboutus"> <Aboutus data={landingPageData.About}/> <Team data={landingPageData.Team} /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/counting"> <Counting /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/product"> <Product /> <Contact data={landingPageData.Contact} />
          </Route>
          <Route exact path="/Team"> <Team /> <Contact data={landingPageData.Contact} />
          </Route>
          {/* <Route exact path="/prakriti"> <Prakriti /> */}
          <Route exact path="/prakriti"> <Prakriti1 data={landingPageData.Prakriti1}/>
          </Route>
          {/* This is the shop <App /> */}
          <Route exact path="/shop"> < App /> </Route> 
          
        </Switch>
        
      {/* <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
    <About data={landingPageData.About} /> */}
      {/* <Routepage/> */}
      {/* <Counting data={landingPageData.Counting} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Product data={landingPageData.Product} />
      <Team data={landingPageData.Team} />*/}
    {/* <Contact data={landingPageData.Contact} />  */}
    </Router>
      
    </div>
  );
};

export default App;


