import Navbar from './Navbar';
import Home from './Home'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


function App() {
  //const title = "Welcome to the NewsHub!";


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
    </Router>
  );
}

export default App;
