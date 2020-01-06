import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  studentSearchSuccess,
  studentSaveSuccess,
  studentFailure,
} from './actions';

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

function* addStudent(data) {
  try {
    const res = yield call(api.post, 'students', data);

    toast.success('Cadastro realizado com sucesso');
    yield put(studentSaveSuccess(res.data));

    history.push('/students');
  } catch (error) {
    toast.error('Erro ao cadastrar');
    yield put(studentFailure());
  }
}

function* updateStudent(data) {
  try {
    const res = yield call(api.put, `students/${data.id}`, data);

    toast.success('Atualizado com sucesso');
    yield put(studentSaveSuccess(res.data));
  } catch (error) {
    toast.error('Erro ao atualizar');
    yield put(studentFailure());
  }
}

function* saveStudent({ payload }) {
  const { id } = payload.data;

  if (id) {
    yield updateStudent(payload.data);
  } else {
    yield addStudent(payload.data);
  }
}

export default all([
  takeLatest('@student/STUDENT_SEARCH_REQUEST', searchStudents),
  takeLatest('@student/STUDENT_SAVE_REQUEST', saveStudent),
]);
