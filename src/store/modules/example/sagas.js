import { call, put, all, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  // eslint-disable-next-line no-new
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.buttonClickSuccess());
  } catch {
    toast.error('Request error!', {
      theme: 'dark',
      closeButton: false,
      pauseOnFocusLoss: false,
      position: 'top-center',
    });
    yield put(actions.buttonClickFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
