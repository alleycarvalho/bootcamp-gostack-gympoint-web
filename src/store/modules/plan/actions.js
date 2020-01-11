export function planSearchRequest(data) {
  return {
    type: '@plan/PLAN_SEARCH_REQUEST',
    payload: { data },
  };
}

export function planSearchSuccess(data) {
  return {
    type: '@plan/PLAN_SEARCH_SUCCESS',
    payload: { data },
  };
}

export function planSaveRequest(data) {
  return {
    type: '@plan/PLAN_SAVE_REQUEST',
    payload: { data },
  };
}

export function planSaveSuccess(data) {
  return {
    type: '@plan/PLAN_SAVE_SUCCESS',
    payload: { data },
  };
}

export function planFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}
