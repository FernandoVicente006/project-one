import "./index.css";

function hero() {
    return (
        <section className="hero">
            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-tag">Em destaque</span>

                <h1 className="hero-title">
                    O futuro dos jogos <span>indie</span> em 2026
                </h1>

                <p className="hero-description">
                    Pixel art, narrativas profundas e criatividade estão a redefinir
                    a indústria dos games. Descobre por que os indies dominam o cenário geek.
                </p>

                <button className="hero-button">
                    Ler artigo
                </button>
            </div>
        </section>
    );
}

export default hero;