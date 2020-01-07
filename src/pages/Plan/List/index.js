import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';
import { Controls } from '~/components/Controls/styles';
import InputSearch from '~/components/InputSearch';
import Loading from '~/components/Loading';
import NoResultsFound from '~/components/NoResultsFound';
import { Panel } from '~/components/Panel/styles';
import { Table, Thead, Th, Tbody, Tr, Td } from '~/components/Table';

import { planSearchRequest } from '~/store/modules/plan/actions';

export default function PlanList() {
  const [termSearch, setTermSearch] = useState('');
  const plans = useSelector(state => state.plan.plans);
  const loading = useSelector(state => state.plan.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(planSearchRequest({ title: termSearch, page: 1 }));
  }, []); // eslint-disable-line

  function handleSearchMain(value, page = 1) {
    setTermSearch(value);
    dispatch(planSearchRequest({ title: value, page }));
  }

  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Planos</Title>

        <Controls>
          <InputSearch
            handleSearch={handleSearchMain}
            placeholder="Buscar plano"
          />
        </Controls>
      </HeaderPage>

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
          <Panel>
            {plans.total === 0 ? (
              <NoResultsFound />
            ) : (
                <>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>TÍTULO</Th>
                        <Th align="center">DURAÇÃO</Th>
                        <Th align="center">VALOR p/ MÊS</Th>
                        <Th colSpan="2" />
                      </Tr>
                    </Thead>

                    <Tbody>
                      {plans.data.map(plan => (
                        <Tr key={String(plan.id)}>
                          <Td>{plan.title}</Td>
                          <Td align="center">{plan.duration}</Td>
                          <Td align="center">{plan.price}</Td>
                          <Td />
                          <Td />
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </>
              )}
          </Panel>
        )}
    </Container>
  );
}
