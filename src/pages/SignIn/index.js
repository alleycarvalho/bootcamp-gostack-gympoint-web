import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
