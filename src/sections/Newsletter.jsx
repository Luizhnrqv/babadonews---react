function Newsletter() {
  return (
    <section id="newsletter" className="secao-inscricao">
      <div className="conteudo-inscricao">
        <span className="etiqueta-inscricao">
          BABADO NEWS
        </span>

        <h2>Fique por dentro!</h2>

        <p>
          Receba as principais notícias e novidades
          diretamente no seu e-mail.
        </p>

        <form
          className="formulario-inscricao"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="campo-inscricao">
            <label htmlFor="email-inscricao">
              Seu melhor e-mail
            </label>

            <input
              type="email"
              id="email-inscricao"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <button type="submit">
            Inscrever-se
          </button>
        </form>

        <small>
          Sua informação está segura com a gente.
        </small>
      </div>
    </section>
  )
}

export default Newsletter