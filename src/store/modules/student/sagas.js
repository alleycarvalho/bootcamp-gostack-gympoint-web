import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { studentSearchSuccess, studentFailure } from './actions';

function* searchStudents({ payload }) {
  try {
    const { name, page } = payload.data;

    const res = yield call(api.get, 'students', {
      params: {
        name: name || '',
        page,
      },
    });

    yield put(studentSearchSuccess(res.data));
  } catch (error) {
    toast.error('Erro ao pesquisar alunos!');

    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/STUDENT_SEARCH_REQUEST', searchStudents),
]);
