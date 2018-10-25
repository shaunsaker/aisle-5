import { combineReducers } from 'redux';

import appStateReducer from './appState';
import itemsReducer from './items';
import navigationReducer from './navigation';
import userReducer from './user';

const reducers = combineReducers({
  appState: appStateReducer,
  items: itemsReducer,
  navigation: navigationReducer,
  user: userReducer,
});

export default reducers;
