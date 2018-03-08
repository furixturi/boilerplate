import { delay } from 'redux-saga';
import { put, call, takeEvery, all } from 'redux-saga/effects';

import ACTIONS from '../actions/ACTION_CONSTANTS';
import API from '../api/API';

function* getGitHubUserEvents() {
    const userEventsResponse = yield call(API.getUserEvents);
    yield put({ type: ACTIONS.USER_EVENTS_RECEIVED, 
        payload: userEventsResponse.data });
}

export default function* rootSaga() {
  yield all([getGitHubUserEvents()]);
}