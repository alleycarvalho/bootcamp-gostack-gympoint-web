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

import { studentSearchRequest } from '~/store/modules/student/actions';

export default function StudentList() {
  const [termSearch, setTermSearch] = useState('');
  const students = useSelector(state => state.student.students);
  const loading = useSelector(state => state.student.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentSearchRequest({ name: termSearch, page: 1 }));
  }, []); // eslint-disable-line

  function handleSearchMain(value, page = 1) {
    setTermSearch(value);
    dispatch(studentSearchRequest({ name: value, page }));
  }

  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Alunos</Title>

        <Controls>
          <InputSearch
            handleSearch={handleSearchMain}
            placeholder="Buscar aluno"
          />
        </Controls>
      </HeaderPage>

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
          <Panel>
            {students.total === 0 ? (
              <NoResultsFound />
            ) : (
                <>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>NOME</Th>
                        <Th>EMAIL</Th>
                        <Th align="center">IDADE</Th>
                        <Th colSpan="2" />
                      </Tr>
                    </Thead>

                    <Tbody>
                      {students.data.map(student => (
                        <Tr key={String(student.id)}>
                          <Td>{student.name}</Td>
                          <Td>{student.email}</Td>
                          <Td align="center">{student.age}</Td>
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
