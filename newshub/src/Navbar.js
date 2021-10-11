const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The NewsHub</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>Technology</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>Sports</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>Politics</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>World</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>Entertainment</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>BlackLivesMatter</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>Satire</a>
            </div>
        </nav>
     );
}
 
export default Navbar;