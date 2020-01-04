import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const user = useSelector(state => state.user);

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
            <strong title={`${user.name} - ${user.email}`}>{user.name}</strong>
            <button type="button">Sair do Sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
