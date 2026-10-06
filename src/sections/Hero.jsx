function Hero() {
  return (
    <section
      id="inicio"
      className="container-fluid px-4 px-lg-5 secao-destaque"
    >
      <div className="row g-4">
        <div className="col-lg-8">
          <article className="noticia-destaque">
            <img
              className="imagem-destaque"
              src="/img/party.jpg"
              alt="Público acompanhando um evento musical"
            />

            <div className="sobreposicao-destaque"></div>

            <div className="conteudo-destaque">
              <span className="etiqueta-noticia">
                ENTRETENIMENTO
              </span>

              <h1>
                Música e entretenimento movimentam a agenda cultural brasileira
              </h1>

              <p>
                Shows, eventos e novidades do mundo dos famosos estão entre os
                assuntos que chamam a atenção do público.
              </p>

              <a href="#destaques" className="botao-materia">
                Ver destaques
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="indicadores-destaque">
              <span className="selecionado"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          <section className="noticias-laterais">
            <div className="titulo-secao">
              <h2>Últimas notícias</h2>
            </div>

            <article className="cartao-noticia">
              <img src="/img/show.jpg" alt="Palco de show" />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  ENTRETENIMENTO
                </span>

                <h3>Rock in Rio: confira as novidades</h3>

                <small>Há 2 horas</small>
              </div>
            </article>

            <article className="cartao-noticia">
              <img
                src="/img/esportes1.jpg"
                alt="Notícia de esportes"
              />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  ESPORTES
                </span>

                <h3>Veja os principais destaques do esporte</h3>

                <small>Há 4 horas</small>
              </div>
            </article>

            <article className="cartao-noticia">
              <img
                src="/img/esportes2.jpg"
                alt="Notícia de tecnologia"
              />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  TECNOLOGIA
                </span>

                <h3>Novas tecnologias transformam o cotidiano</h3>

                <small>Há 6 horas</small>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero