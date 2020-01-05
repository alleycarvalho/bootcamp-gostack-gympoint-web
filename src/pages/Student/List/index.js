import React from 'react';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';

export default function StudentList() {
  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Alunos</Title>
      </HeaderPage>
    </Container>
  );
}
