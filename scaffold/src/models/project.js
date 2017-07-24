import { queryProgressList } from '../services/api';

export default {
  namespace: 'project',

  state: {
    progressList: [],
    loading: true,
  },

  effects: {
    *fetchProgressList({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryProgressList);
      yield put({
        type: 'saveProgressList',
        payload: response.data,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveProgressList(state, action) {
      return {
        ...state,
        progressList: action.payload,
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
