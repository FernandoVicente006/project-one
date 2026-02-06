import { Link } from "react-router-dom";
import "./index.css";

function header() {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-highlight">Geek</span>Verse
            </div>

            <nav className="nav">
                <Link to={"/"}>Home</Link>
                <Link to={"/games"}>Games</Link>
                <Link to={"/"}>Filmes</Link>
                <Link to={"/"}>Tech</Link>
                <Link to={"/"}>HQs</Link>
            </nav>

            <div className="header-actions">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="search-input"
                />
            </div>
        </header>
    );
}

export default header;