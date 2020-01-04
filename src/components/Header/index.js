import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="GymPoint" />
          </Link>

          <div className="separator" />

          <NavLink to="/" activeClassName="selected">
            ALUNOS
          </NavLink>

          <NavLink to="/" activeClassName="selected">
            PLANOS
          </NavLink>

          <NavLink to="/" activeClassName="selected">
            MATRÍCULAS
          </NavLink>

          <NavLink to="/" activeClassName="selected">
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <strong>Alley M. Carvalho</strong>
            <button type="button">Sair do Sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
