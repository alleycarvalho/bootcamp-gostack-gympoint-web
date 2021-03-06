import React from 'react';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';

export default function Dashboard() {
  return (
    <Container>
      <HeaderPage>
        <Title>Dashboard</Title>
      </HeaderPage>
    </Container>
  );
}
