import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import ACTIONS from "../actions/ACTION_CONSTANTS";

const sampleReducer = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SAMPLE_ACTION:            
            return 'sample action';    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    router,
    sampleReducer
});

export default rootReducer;