import { combineReducers } from 'redux';

import appStateReducer from './appState';
import navigationReducer from './navigation';
import pendingListReducer from './pendingList';
import userReducer from './user';
import userItemsReducer from './userItems';
import userListsReducer from './userLists';

const reducers = combineReducers({
  appState: appStateReducer,
  navigation: navigationReducer,
  pendingList: pendingListReducer,
  user: userReducer,
  userItems: userItemsReducer,
  userLists: userListsReducer,
});

export default reducers;
