function Footer() {
  return (
    <footer id="rodape" className="rodape-site">
      <div className="container-fluid px-4 px-lg-5">
        <div className="conteudo-rodape">
          <div className="marca-rodape">
            <a href="#inicio" className="logo-rodape">
              BABADO <span>NEWS.</span>
            </a>

            <p>
              Informação que te acompanha. Sempre.
            </p>
          </div>

          <div className="links-rodape">
            <a href="#inicio">Início</a>
            <a href="#destaques">Destaques</a>
            <a href="#categorias">Categorias</a>
            <a href="#esportes">Esportes</a>
            <a href="#newsletter">Assine</a>
          </div>

          <div className="redes-sociais">
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        <div className="direitos-autorais">
          © 2026 Babado News. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer