export default {
  namespace: 'form',

  state: {
    step: {},
  },

  effects: {
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
  },
};
