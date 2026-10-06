function Esportes() {
  const noticiasEsportes = [
    {
      categoria: 'BASQUETE',
      titulo:
        'Novos donos dos Lakers querem colocar o clube a valer €26 mil milhões',
      imagem: '/img/esportes2.jpg',
      tempo: 'Atualizado hoje',
      principal: true,
    },
    {
      categoria: 'FÓRMULA 1',
      titulo:
        'Líder da F1, joia da Mercedes responde sobre interesse da Ferrari',
      imagem: '/img/esportes3.jpg',
      tempo: 'Há 6 horas',
    },
    {
      categoria: 'FUTEBOL',
      titulo:
        'Raphinha anota segundo hat-trick consecutivo, Barcelona vira sobre Sevilla e segue 100% em LALIGA',
      imagem: '/img/esportes4.jpg',
      tempo: 'Há 8 horas',
    },
    {
      categoria: 'TÊNIS',
      titulo: 'João Fonseca se emociona com apoio do ídolo Guga',
      imagem: '/img/esportes5.jpg',
      tempo: 'Há 9 horas',
    },
  ]

  return (
    <section id="esportes">
      <div className="container-fluid px-4 px-lg-5 secao-destaque">
        <div className="row">
          <div className="col-12">
            <article className="noticia-destaque">
              <img
                className="imagem-destaque"
                src="/img/esportes1.jpg"
                alt="Seleção Brasileira"
              />

              <div className="sobreposicao-destaque"></div>

              <div className="conteudo-destaque">
                <span className="etiqueta-noticia">
                  ESPORTES
                </span>

                <h2>
                  Confira os convocados para amistoso da seleção brasileira.
                </h2>

                <p>
                  Novos jogadores com oportunidade de observação.
                </p>

                <a href="#newsletter" className="botao-materia">
                  Acompanhar novidades
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5 secao-destaques">
        <div className="titulo-secao">
          <span className="etiqueta-secao">
            ESPORTES
          </span>

          <h2>Em destaque</h2>

          <p>
            Confira as principais notícias do mundo dos esportes.
          </p>
        </div>

        <div className="grade-destaques">
          {noticiasEsportes.map((noticia, index) => (
            <article
              key={index}
              className={
                noticia.principal
                  ? 'materia-principal'
                  : 'materia-secundaria'
              }
            >
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
              />

              <div className="conteudo-materia">
                <span className="categoria-noticia">
                  {noticia.categoria}
                </span>

                <h3>{noticia.titulo}</h3>

                <small>{noticia.tempo}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Esportes