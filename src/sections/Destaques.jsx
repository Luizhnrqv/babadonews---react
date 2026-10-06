function Destaques() {
  const noticias = [
    {
      categoria: 'NOTÍCIAS',
      titulo: 'Os principais acontecimentos que movimentam o Brasil',
      descricao:
        'Informação, acontecimentos e temas importantes para acompanhar as notícias do dia.',
      imagem:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85',
      tempo: 'Atualizado hoje',
      principal: true,
    },
    {
      categoria: 'ENTRETENIMENTO',
      titulo:
        '"Resident Evil" quebra recorde da franquia com US$ 60 milhões em bilheteria',
      imagem: '/img/resident evil.webp',
      tempo: 'Há 4 horas',
    },
    {
      categoria: 'ESPORTES',
      titulo:
        'Novos donos dos Lakers querem colocar o clube a valer €26 mil milhões',
      imagem: '/img/esportes2.jpg',
      tempo: 'Há 5 horas',
    },
    {
      categoria: 'POLÍTICA',
      titulo: 'Governo discute novas medidas para o ambiente digital',
      imagem:
        'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=85',
      tempo: 'Há 6 horas',
    },
    {
      categoria: 'TECNOLOGIA',
      titulo: 'Inteligência artificial e inovação ganham espaço no mercado',
      imagem:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85',
      tempo: 'Há 8 horas',
    },
    {
      categoria: 'CULTURA',
      titulo: 'Conheça mais sobre Lifestyle e descubra o seu.',
      imagem: '/img/life.png',
      tempo: 'Há 9 horas',
    },
  ]

  return (
    <section
      id="destaques"
      className="container-fluid px-4 px-lg-5 secao-destaques"
    >
      <div className="titulo-secao">
        <span className="etiqueta-secao">BABADO NEWS</span>

        <h2>Em destaque</h2>

        <p>
          Confira assuntos que estão movimentando o Brasil e o mundo.
        </p>
      </div>

      <div className="grade-destaques">
        {noticias.map((noticia, index) => (
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

              {noticia.descricao && (
                <p>{noticia.descricao}</p>
              )}

              <small>{noticia.tempo}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Destaques