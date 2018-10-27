import { takeLatest, takeEvery, fork, all } from 'redux-saga/effects';

import { getAuth, signInAnonymously, signOut } from './auth';

import { getUniqueID } from './deviceInfo';

import { logError } from './errors';

import {
  addDocument,
  deleteDocument,
  disableNetwork,
  enableNetwork,
  getCollection,
  getDocument,
  setDocument,
  sync,
  updateDocument,
} from './firestore';

export default function* sagas() {
  yield all([
    fork(takeLatest, 'getAuth', getAuth),
    fork(takeLatest, 'signInAnonymously', signInAnonymously),
    fork(takeLatest, 'signOut', signOut),

    fork(takeLatest, 'getUniqueID', getUniqueID),

    fork(takeEvery, 'addDocument', addDocument),
    fork(takeEvery, 'deleteDocument', deleteDocument),
    fork(takeEvery, 'disableNetwork', disableNetwork),
    fork(takeEvery, 'enableNetwork', enableNetwork),
    fork(takeEvery, 'getCollection', getCollection),
    fork(takeEvery, 'getDocument', getDocument),
    fork(takeEvery, 'setDocument', setDocument),
    fork(takeEvery, 'sync', sync),
    fork(takeEvery, 'updateDocument', updateDocument),

    fork(takeLatest, 'logError', logError),
  ]);
}
