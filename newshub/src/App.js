import Navbar from './Navbar';
import Home from './Home'; 
import Tech from './TechnologyPage';
import Sports from './SportsPage';
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

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
