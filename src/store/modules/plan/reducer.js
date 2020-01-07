import produce from 'immer';

const INITIAL_STATE = {
  plans: {
    page: 1,
    perPage: 5,
    data: [],
    total: 0,
    totalPage: 0,
  },
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/PLAN_SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@plan/PLAN_SEARCH_SUCCESS': {
        draft.plans = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@student/PLAN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}