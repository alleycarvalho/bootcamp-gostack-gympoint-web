import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { planSearchSuccess, planFailure } from './actions';

function* searchPlans({ payload }) {
  try {
    const { title, page } = payload.data;

    const res = yield call(api.get, 'plans', {
      params: {
        title: title || '',
        page,
      },
    });

    yield put(planSearchSuccess(res.data));
  } catch (error) {
    toast.error('Erro ao pesquisar planos!');

    yield put(planFailure());
  }
}

export default all([takeLatest('@plan/PLAN_SEARCH_REQUEST', searchPlans)]);
