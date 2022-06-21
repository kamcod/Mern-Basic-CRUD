import { Link } from "react-router-dom";
const MainMenu = () => {
    return(
        <div style={{padding: "20px", textAlign: "center"}}>
            
            <h1>MainMenu (Top Navigation Bar)</h1>
      <nav>
        <Link to="/">Dashboard</Link> { ' '}
        <Link to="/about">About</Link>
      </nav>
        </div>
    );
}

export default MainMenu;