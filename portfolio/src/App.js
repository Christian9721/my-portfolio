import './App.css';
import NavBar from './components/navbar.js';
import MainPortfolio from './components/mainportfolio';
import Featured from './components/featured';
import Contact from './components/contactme';
import Skills from './components/skills';
import More from './components/more';
import NotFound from './components/notfound/notfound';

import Mobile from './images/featured/cel2.png';

import CatDead from './images/cat/Dead.png';
import CatLive from './images/cat/Live.png';
import Universe from './images/cat/universe.jpg';

import box_bottom from './images/cat/box_bottom.png';
import box_front from './images/cat/box_front.png';
import box_top from './images/cat/box_top.png';
import measure from './images/cat/measure.svg';

import './css/style.css';
import './css/tooltips.css';
import './css/featured.css';
import './css/buttonstyle.css';
import './css/featured/featured.css';
import './css/badges.css';
import './css/cat.css';
import './css/more/more.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  useRouteMatch,
  useParams,
  Redirect
} from 'react-router-dom';

function App() {

  //let match = useRouteMatch();

  return (
    <div> 
      <Router> 
        <NavBar/>
            <Switch>
              <Redirect exact from="/" to="/main" />
              <Redirect exact from="/my-portfolio" to="/main"/>
              <Route path="/main">
                <MainPortfolio/>
              </Route>
              <Route path="/featured">
                <Featured image={Mobile}/>
              </Route>
              <Route path="/skills">
                <Skills/>
              </Route>
              <Route path="/more">
                  <More 
                    dead = {CatDead} 
                    live = {CatLive}
                    universe = {Universe}
                    bx_front = {box_front}
                    bx_bottom = {box_bottom}
                    bx_top = {box_top}
                  />
              </Route>
              <Route path="/contact" >
                <Contact/>
              </Route>
              <Route exact component={NotFound}/>
            </Switch>      
      </Router>
    </div>
  );
}


export default App;
