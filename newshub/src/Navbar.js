import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The NewsHub</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/TechnologyPage">Technology</Link>
                <Link to="/create" >Sports</Link>
                <Link to="/create" >Politics</Link>
                <Link to="/create">World</Link>
                <Link to="/create">Entertainment</Link>
                <Link to="/create">BlackLivesMatter</Link>
                <Link to="/create">Satire</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;