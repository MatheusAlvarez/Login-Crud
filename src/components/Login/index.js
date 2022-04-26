import React, { Component } from 'react'
import './style.css'

const Login = () =>{
    return (
      <form>
        <h3>Entrar</h3>

        <div className="mb-3">
          <label>Nome:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Informe seu nome"
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
          <button type="submit" className="btn btn-primary btn-red ">
            Enviar
          </button>
        </div>
        <p className="forgot-password">
          Esqueceu a <a href="/recuperar-senha">senha?</a>
        </p>

        <p className="forgot-password text-left ml">
          <a href="/cadastro">Criar Conta</a>
        </p>
      </form>
    )
}

export default Login;