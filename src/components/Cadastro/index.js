import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Cadastrar</h3>

        <div className="mb-3">
          <label>Nome:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Informe seu nome"
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Informe seu email"
          />
        </div>

        <div className="mb-3">
          <label>Senha:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Informe sua senha"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-red">
            Cadastrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Já tem uma conta? <a href="/">entrar</a>
        </p>
      </form>
    )
  }
}
