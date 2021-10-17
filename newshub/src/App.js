import Navbar from './Navbar';
import Home from './Home'; 
import Tech from './TechnologyPage';
import Sports from './SportsPage';
import Entertainment from './EntertainmentPage';
import Health from './HealthPage';
import Business from './BusinessPage';
import Science from './SciencePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 



function App() {
  //const title = "Welcome to the NewsHub!";


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path ="/TechnologyPage">
            <Tech />
          </Route>
          
          <Route exact path ="/SportsPage">
            <Sports />
          </Route>

          <Route exact path ="/EntertainmentPage">
            <Entertainment />
          </Route>

          <Route exact path ="/HealthPage">
            <Health />
          </Route>

          <Route exact path ="/BusinessPage">
            <Business />
          </Route>

          <Route exact path ="/SciencePage">
            <Science />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
