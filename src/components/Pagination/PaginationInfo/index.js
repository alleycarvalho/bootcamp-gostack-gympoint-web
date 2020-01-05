import React from 'react';
import { Container } from './styles';

export default function PaginationInfo({ page, perPage, totalPage, total }) {
  return (
    <Container>
      <span>
        Página <strong>{page}</strong> de <strong>{totalPage}</strong>
      </span>

      <span>
        Total: <strong>{total}</strong> registro{total > 1 ? 's' : ''}
      </span>
    </Container>
  );
}

PaginationInfo.defaultsProps = {
  page: 0,
  perPage: 0,
  totalPage: 0,
  total: 0,
};
