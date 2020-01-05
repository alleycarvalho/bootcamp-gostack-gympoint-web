import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="GymPoint" />
          </Link>

          <div className="separator" />

          <NavLink to="/students" activeClassName="selected">
            ALUNOS
          </NavLink>

          <NavLink to="/plans" activeClassName="selected">
            PLANOS
          </NavLink>

          <NavLink to="/enrollments" activeClassName="selected">
            MATRÍCULAS
          </NavLink>

          <NavLink to="/help-orders" activeClassName="selected">
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <strong title={`${user.name} - ${user.email}`}>{user.name}</strong>
            <button type="button" onClick={handleSignOut}>
              Sair do Sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
