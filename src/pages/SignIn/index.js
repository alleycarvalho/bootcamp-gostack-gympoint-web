import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="GymPoint" />

        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          label="Seu e-mail"
        />

        <Input
          name="password"
          type="password"
          placeholder="Seu senha"
          label="Seu senha"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
