import { queryTrendList } from '../services/api';

export default {
  namespace: 'trend',

  state: {
    list: [],
    loading: true,
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryTrendList);
      yield put({
        type: 'saveList',
        payload: response.data,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
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
