import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { formatCurrency, formatCurrencyBR } from '~/utils';

import {
  planSearchSuccess,
  planSaveSuccess,
  planDeleteSuccess,
  planFailure,
} from './actions';

function* searchPlans({ payload }) {
  try {
    const { title, page } = payload.data;

    const res = yield call(api.get, 'plans', {
      params: {
        title: title || '',
        page,
      },
    });

    const data = res.data.data.map(item => ({
      ...item,
      priceFormatted: formatCurrencyBR(item.price),
      monthString: item.duration === 1 ? 'mês' : 'meses',
    }));

    yield put(planSearchSuccess({ ...res.data, data }));
  } catch (error) {
    toast.error('Erro ao pesquisar planos!');

    yield put(planFailure());
  }
}

function* addPlan(data) {
  try {
    const dataFormatted = { ...data, price: formatCurrency(data.price) };

    const res = yield call(api.post, 'plans', dataFormatted);

    toast.success('Cadastro realizado com sucesso');
    yield put(planSaveSuccess(res.data));

    history.push('/plans');
  } catch (error) {
    toast.error('Erro ao cadastrar');
    yield put(planFailure());
  }
}

function* updatePlan(data) {
  try {
    const dataFormatted = { ...data, price: formatCurrency(data.price) };

    const res = yield call(api.put, `plans/${dataFormatted.id}`, dataFormatted);

    toast.success('Atualizado com sucesso');
    yield put(planSaveSuccess(res.data));
  } catch (error) {
    toast.error('Erro ao atualizar');
    yield put(planFailure());
  }
}

function* savePlan({ payload }) {
  const { id } = payload.data;

  if (id) {
    yield updatePlan(payload.data);
  } else {
    yield addPlan(payload.data);
  }
}

function* deletePlan({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plans/${id}`);

    toast.success('Registro removido com sucesso');
    yield put(planDeleteSuccess(id));
  } catch (error) {
    toast.error('Erro ao remover registro');
    yield put(planFailure());
  }
}

export default all([
  takeLatest('@plan/PLAN_SEARCH_REQUEST', searchPlans),
  takeLatest('@plan/PLAN_SAVE_REQUEST', savePlan),
  takeLatest('@plan/PLAN_DELETE_REQUEST', deletePlan),
]);
