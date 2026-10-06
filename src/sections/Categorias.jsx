function Categorias() {
  const categorias = [
    {
      nome: 'Política',
      descricao: 'Brasil e mundo',
      icone: 'bi bi-globe2',
    },
    {
      nome: 'Entretenimento',
      descricao: 'Famosos, TV e cultura',
      icone: 'bi bi-camera-reels',
    },
    {
      nome: 'Esportes',
      descricao: 'Resultados e análises',
      icone: 'bi bi-trophy',
    },
    {
      nome: 'Lifestyle',
      descricao: 'Moda e bem-estar',
      icone: 'bi bi-heart',
    },
    {
      nome: 'Tecnologia',
      descricao: 'Inovação e tendências',
      icone: 'bi bi-laptop',
    },
  ]

  return (
    <section
      id="categorias"
      className="container-fluid px-4 px-lg-5 secao-categorias"
    >
      <div className="titulo-secao titulo-categorias">
        <h2>Navegue pelo que te interessa</h2>
      </div>

      <div className="grade-categorias">
        {categorias.map((categoria, index) => (
          <div className="caixa-categoria" key={index}>
            <i className={`${categoria.icone} icone-categoria`}></i>

            <div>
              <h3>{categoria.nome}</h3>
              <p>{categoria.descricao}</p>
            </div>

            <i className="bi bi-arrow-up-right seta-categoria"></i>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categorias