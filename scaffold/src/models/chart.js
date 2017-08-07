import { fakeChartData } from '../services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    radarData: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
