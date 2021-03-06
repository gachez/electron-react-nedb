// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import main from './mainReducer';

const rootReducer = combineReducers({
  main,
  router,
});

export default rootReducer;
