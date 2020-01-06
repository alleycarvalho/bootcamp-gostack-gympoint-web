import React, { useEffect, useState } from 'react';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import history from '~/services/history';

import colors from '~/styles/colors';

import { Container, Row, Column } from '~/components/Grid';
import { HeaderPage } from '~/components/HeaderPage/styles';
import Title from '~/components/Title';
import { Controls } from '~/components/Controls/styles';
import ButtonLink from '~/components/ButtonLink';
import Button from '~/components/Button';

import { Panel } from '~/components/Panel/styles';
import Label from '~/components/Label';
import Input from '~/components/Input';
import { FormGroup } from '~/components/FormGroup/styles';

import { studentSaveRequest } from '~/store/modules/student/actions';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é Obrigatório'),
  age: Yup.number()
    .min(1, 'A idade deve ser maior que 0')
    .max(150, 'A idade deve ser menor ou igual 150 anos')
    .transform((v, o) => (o === '' ? undefined : v))
    .required('A idade é obrigatória'),
  weight: Yup.number()
    .positive('O peso deve ser maior que 0')
    .transform((v, o) => (o === '' ? undefined : v))
    .required('O peso é obrigatório'),
  height: Yup.number()
    .positive('A altura deve ser maior que 0')
    .transform((v, o) => (o === '' ? undefined : v))
    .required('A Altura é obrigatória'),
});

export default function StudentForm() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const dispath = useDispatch();

  function handleSubmit(data) {
    dispath(studentSaveRequest({ ...data, id }));
  }

  async function loadStudent() {
    try {
      const res = await api.get(`students/${id}`);

      setStudent(res.data);
    } catch (err) {
      toast.error(`Registro (id: ${id}) não encontrado`);

      history.push('/students');
    }
  }

  useEffect(() => {
    if (id) {
      loadStudent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      <HeaderPage>
        <Title>{id > 0 ? 'Edição de aluno' : 'Cadastro de aluno'}</Title>

        <Controls>
          <ButtonLink to="/students" color={colors.grey2}>
            <MdKeyboardArrowLeft size={20} title="Voltar" />
            <span>Voltar</span>
          </ButtonLink>

          <Button
            type="submit"
            icon={<MdDone size={20} />}
            label="Salvar"
            form="formStudent"
          />
        </Controls>
      </HeaderPage>

      <Panel>
        <Form
          id="formStudent"
          initialData={student}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Input name="id" type="hidden" />

          <Label>NOME COMPLETO</Label>
          <Input name="name" placeholder="Digite seu nome completo" />

          <Label>E-MAIL</Label>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />

          <Row>
            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>IDADE</Label>
                <Input
                  name="age"
                  type="number"
                  step="1"
                  placeholder="Sua idade"
                />
              </FormGroup>
            </Column>

            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>PESO (kg)</Label>
                <Input
                  name="weight"
                  type="number"
                  step="0.01"
                  placeholder="Seu peso"
                />
              </FormGroup>
            </Column>

            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>ALTURA (cm)</Label>
                <Input
                  name="height"
                  type="number"
                  step="1"
                  placeholder="Sua altura"
                />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </Panel>
    </Container>
  );
}
