import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import colors from '~/styles/colors';
import Alert from '~/utils/alert';

import { Container } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';
import { Controls } from '~/components/Controls/styles';
import ButtonLink from '~/components/ButtonLink';
import ButtonLikeLink from '~/components/ButtonLikeLink';
import InputSearch from '~/components/InputSearch';
import Loading from '~/components/Loading';
import NoResultsFound from '~/components/NoResultsFound';
import { Panel } from '~/components/Panel/styles';
import { Table, Thead, Th, Tbody, Tr, Td } from '~/components/Table';
import { PaginationContainer } from '~/components/Pagination/Container/styles';
import PaginationInfo from '~/components/Pagination/PaginationInfo';
import Pagination from '~/components/Pagination';

import {
  studentSearchRequest,
  studentDeleteRequest,
} from '~/store/modules/student/actions';

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

  function handleLoadPage(page) {
    handleSearchMain(termSearch, page);
  }

  function handleDelete(id) {
    Alert.delete().then(result => {
      if (result.value) {
        dispatch(studentDeleteRequest(id));
      }
    });
  }

  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Alunos</Title>

        <Controls>
          <ButtonLink to="/students/new" title="Adicionar novo aluno">
            <MdAdd size={20} />
            <span>Cadastrar</span>
          </ButtonLink>

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
                          <Td align="center" width="50">
                            <Link
                              to={`/students/${student.id}/edit`}
                              style={{ color: colors.blue }}
                            >
                              Editar
                        </Link>
                          </Td>
                          <Td align="center" width="70">
                            <ButtonLikeLink
                              style={{ color: colors.red }}
                              onClick={() => handleDelete(student.id)}
                            >
                              Remover
                        </ButtonLikeLink>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>

                  <PaginationContainer>
                    <PaginationInfo
                      page={students.page}
                      perPage={students.perPage}
                      totalPage={students.totalPage}
                      total={students.total}
                    />

                    {students.totalPage > 1 && (
                      <Pagination
                        page={students.page}
                        totalPage={students.totalPage}
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
