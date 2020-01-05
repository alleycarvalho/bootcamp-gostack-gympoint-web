import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Message } from './styles';
import colors from '~/styles/colors';

export default function NoResultsFound() {
  return (
    <Container>
      <MdSearch size={34} color={colors.grey5} />
      <Message>Nenhum registro encontrado.</Message>
    </Container>
  );
}
