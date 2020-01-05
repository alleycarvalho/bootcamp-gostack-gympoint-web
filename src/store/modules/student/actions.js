export function studentSearchRequest(data) {
  return {
    type: '@student/STUDENT_SEARCH_REQUEST',
    payload: { data },
  };
}

export function studentSearchSuccess(data) {
  return {
    type: '@student/STUDENT_SEARCH_SUCCESS',
    payload: { data },
  };
}

export function studentFailure() {
  return {
    type: '@student/STUDENT_FAILURE',
  };
}
