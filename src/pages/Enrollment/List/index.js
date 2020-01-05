import React from 'react';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';

export default function EnrollmentList() {
  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Matrículas</Title>
      </HeaderPage>
    </Container>
  );
}
