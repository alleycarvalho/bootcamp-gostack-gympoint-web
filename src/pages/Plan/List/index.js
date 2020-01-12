import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';
import { Controls } from '~/components/Controls/styles';
import ButtonLink from '~/components/ButtonLink';
import InputSearch from '~/components/InputSearch';
import Loading from '~/components/Loading';
import NoResultsFound from '~/components/NoResultsFound';
import { Panel } from '~/components/Panel/styles';
import { Table, Thead, Th, Tbody, Tr, Td } from '~/components/Table';
import { PaginationContainer } from '~/components/Pagination/Container/styles';
import PaginationInfo from '~/components/Pagination/PaginationInfo';
import Pagination from '~/components/Pagination';

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

  function handleLoadPage(page) {
    handleSearchMain(termSearch, page);
  }

  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Planos</Title>

        <Controls>
          <ButtonLink to="/plans/new" title="Adicionar novo plano">
            <MdAdd size={20} />
            <span>Cadastrar</span>
          </ButtonLink>

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
                          <Td align="center">{`${plan.duration} ${plan.monthString}`}</Td>
                          <Td align="center">{plan.priceFormatted}</Td>
                          <Td>
                            <Link
                              to={`/plans/${plan.id}/edit`}
                              style={{ color: colors.blue }}
                            >
                              Editar
                        </Link>
                          </Td>
                          <Td />
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>

                  <PaginationContainer>
                    <PaginationInfo
                      page={plans.page}
                      perPage={plans.perPage}
                      totalPage={plans.totalPage}
                      total={plans.total}
                    />

                    {plans.totalPage > 1 && (
                      <Pagination
                        page={plans.page}
                        totalPage={plans.totalPage}
                        align="center"
                        onLoadPage={handleLoadPage}
                      />
                    )}
                  </PaginationContainer>
                </>
              )}
          </Panel>
        )}
    </Container>
  );
}
