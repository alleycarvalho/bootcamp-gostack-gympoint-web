import React from 'react';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';

export default function PlanList() {
  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Planos</Title>
      </HeaderPage>
    </Container>
  );
}
