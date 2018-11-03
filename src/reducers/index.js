import { combineReducers } from 'redux';

import appStateReducer from './appState';
import deviceInfoReducer from './deviceInfo';
import navigationReducer from './navigation';
import pendingListReducer from './pendingList';
import userReducer from './user';
import userCoachmarksReducer from './userCoachmarks';
import userItemsReducer from './userItems';
import userListsReducer from './userLists';

const reducers = combineReducers({
  appState: appStateReducer,
  deviceInfo: deviceInfoReducer,
  navigation: navigationReducer,
  pendingList: pendingListReducer,
  user: userReducer,
  userCoachmarks: userCoachmarksReducer,
  userItems: userItemsReducer,
  userLists: userListsReducer,
});

export default reducers;
