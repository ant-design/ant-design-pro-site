export default {
  namespace: 'global',

  state: {
    collapsed: false,
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },
};
