function Navbar() {
  return (
    <>
      <header className="cabecalho-site">
        <div className="barra-superior">
          <div className="data-site">
            <span>Brasil, 5 de outubro de 2026</span>
          </div>

          <div className="links-superiores">
            <a href="#newsletter">Assine</a>
            <span>|</span>
            <a href="#rodape">Fale conosco</a>
          </div>
        </div>

        <div className="cabecalho-conteudo">
          <div className="cabecalho-manifesto">
            <span className="linha-destaque"></span>
            <span>NOTÍCIAS</span>
            <span>CULTURA</span>
            <span>ENTRETENIMENTO</span>
            <span>E MUITO MAIS</span>
          </div>

          <a href="#inicio" className="logo-site">
            <img src="/img/logo.png" alt="Logo Babado News" />

            <p className="slogan-site">
              TUDO O QUE IMPORTA, EM UM SÓ LUGAR.
            </p>
          </a>

          <div className="cabecalho-descricao">
            <p>Informação que te acompanha.</p>

            <strong>Todos os dias.</strong>

            <span className="linha-destaque"></span>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg menu-site sticky-top">
        <div className="container-fluid px-4 px-lg-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse menu-conteudo"
            id="menuPrincipal"
          >
            <ul className="navbar-nav menu-links">
              <li className="nav-item">
                <a href="#inicio" className="nav-link">
                  Início
                </a>
              </li>

              <li className="nav-item">
                <a href="#destaques" className="nav-link">
                  Destaques
                </a>
              </li>

              <li className="nav-item">
                <a href="#categorias" className="nav-link">
                  Categorias
                </a>
              </li>

              <li className="nav-item">
                <a href="#esportes" className="nav-link">
                  Esportes
                </a>
              </li>

              <li className="nav-item">
                <a href="#newsletter" className="nav-link">
                  Assine
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar