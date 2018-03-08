import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import ACTIONS from "../actions/ACTION_CONSTANTS";

const gitHubUserEvents = (state = [], action) => {
    switch (action.type) {
      case ACTIONS.USER_EVENTS_RECEIVED:
        return action.payload;
    default:
        return state;
    }
}

const rootReducer = combineReducers({
  router,
  gitHubUserEvents
});

export default rootReducer;