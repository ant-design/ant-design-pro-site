import { routerRedux } from 'dva/router';
import { fakeSubmitForm } from '../services/api';

export default {
  namespace: 'form',

  state: {
    step: {
      submitting: false,
    },
  },

  effects: {
    *submit({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
      yield put(routerRedux.push('/form/step-form/result'));
    },
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...state.step,
          ...payload,
        },
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        step: {
          ...state.step,
          submitting: payload,
        },
      };
    },
  },
};
