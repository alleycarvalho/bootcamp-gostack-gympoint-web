import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
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
