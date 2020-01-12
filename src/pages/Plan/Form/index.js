import React, { useEffect, useState, useMemo } from 'react';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
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
import InputCurrency from '~/components/InputCurrency';
import InputInfo from '~/components/InputInfo';
import { FormGroup } from '~/components/FormGroup/styles';

import { formatCurrency, formatCurrencyBR } from '~/utils';

import { planSaveRequest } from '~/store/modules/plan/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título do plano é obrigatório'),
  duration: Yup.number()
    .min(1, 'A duração deve ser no mínimo 1 mês')
    .max(60, 'A duração deve ser no máximo 60 meses')
    .transform((v, o) => (o === '' ? undefined : v))
    .required('A duração é obrigatória'),
  price: Yup.string().required('O preço é obrigatório'),
});

export default function PlanForm() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const dispath = useDispatch();

  const totalPrice = useMemo(() => {
    let total = 0.0;

    if (plan.duration && plan.price) {
      total = parseInt(plan.duration, 10) * formatCurrency(plan.price);
    }

    return formatCurrencyBR(total);
  }, [plan]);

  function handleSubmit(data) {
    dispath(planSaveRequest({ ...data, id }));
  }

  async function loadPlan() {
    try {
      const res = await api.get(`plans/${id}`);
      const { data } = res;

      setPlan({
        ...data,
        price: formatCurrencyBR(data.price, false),
      });
    } catch (err) {
      toast.error(`Registro (id: ${id}) não encontrado`);

      history.push('/plans');
    }
  }

  useEffect(() => {
    if (id) {
      loadPlan();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      <HeaderPage>
        <Title>{id > 0 ? 'Edição de plano' : 'Cadastro de plano'}</Title>

        <Controls>
          <ButtonLink to="/plans" color={colors.grey2}>
            <MdKeyboardArrowLeft size={20} title="Voltar" />
            <span>Voltar</span>
          </ButtonLink>

          <Button
            type="submit"
            icon={<MdDone size={20} />}
            label="Salvar"
            form="formPlan"
          />
        </Controls>
      </HeaderPage>

      <Panel>
        <Form
          id="formPlan"
          initialData={plan}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Input name="id" type="hidden" />

          <Label>TÍTULO DO PLANO</Label>
          <Input
            name="title"
            placeholder="Digite o título do plano"
            onChange={e => setPlan({ ...plan, title: e.target.value })}
          />

          <Row>
            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>DURAÇÃO (Em meses)</Label>
                <Input
                  name="duration"
                  type="number"
                  step="1"
                  placeholder="Digite duração"
                  onChange={e => setPlan({ ...plan, duration: e.target.value })}
                />
              </FormGroup>
            </Column>

            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>PREÇO MENSAL</Label>
                <InputCurrency
                  name="price"
                  value={plan.price}
                  onChange={e => setPlan({ ...plan, price: e })}
                />
              </FormGroup>
            </Column>

            <Column mobile="12" tablet="4" desktop="4">
              <FormGroup>
                <Label>PREÇO TOTAL</Label>
                <InputInfo value={totalPrice} />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </Panel>
    </Container>
  );
}
