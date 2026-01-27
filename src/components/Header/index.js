import "./index.css";

function header() {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-highlight">Geek</span>Verse
            </div>

            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Games</a>
                <a href="#">Filmes</a>
                <a href="#">Tech</a>
                <a href="#">HQs</a>
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