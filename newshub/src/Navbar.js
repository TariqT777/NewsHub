const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The NewsHub</h1>
            <div className="links">
                <a href="/create">Home</a>
                <a href="/create">Technology</a>
                <a href="/create" style={{
                    color: "white",
                    borderRadius: '8px'
                }}>Sports</a>
                <a href="/create" >Politics</a>
                <a href="/create">World</a>
                <a href="/create">Entertainment</a>
                <a href="/create">BlackLivesMatter</a>
                <a href="/create">Satire</a>
            </div>
        </nav>
     );
}
 
export default Navbar;