import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The NewsHub</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/TechnologyPage">Technology</Link>
                <Link to="/SportsPage" >Sports</Link>
                <Link to="/EntertainmentPage">Entertainment</Link>
                <Link to="/HealthPage">Health</Link>
                <Link to="/BusinessPage">Business</Link>
                <Link to="/SciencePage">Science</Link>
            </div>
            <div className = "searchbar">
                <SearchBar />
            </div>
        </nav>
     );
}
 
export default Navbar;