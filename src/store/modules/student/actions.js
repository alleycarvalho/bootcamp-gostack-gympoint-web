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

export function studentSaveRequest(data) {
  return {
    type: '@student/STUDENT_SAVE_REQUEST',
    payload: { data },
  };
}

export function studentSaveSuccess(data) {
  return {
    type: '@student/STUDENT_SAVE_SUCCESS',
    payload: { data },
  };
}

export function studentDeleteRequest(id) {
  return {
    type: '@student/STUDENT_DELETE_REQUEST',
    payload: { id },
  };
}

export function studentDeleteSuccess(id) {
  return {
    type: '@student/STUDENT_DELETE_SUCCESS',
    id,
  };
}

export function studentFailure() {
  return {
    type: '@student/STUDENT_FAILURE',
  };
}
