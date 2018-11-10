import initialState from './initialState';
import utils from '../../utils';

export default function appStateReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_DEVICE_LOCATION':
      newState = utils.objects.cloneObject(state);
      newState.deviceLocation = action.payload.coords;
      return newState;

    case 'SET_SYSTEM_MESSAGE':
      newState = utils.objects.cloneObject(state);
      newState.systemMessage = action.payload.message;
      return newState;

    case 'RESET_SYSTEM_MESSAGE':
      newState = utils.objects.cloneObject(state);
      newState.systemMessage = initialState.systemMessage;
      return newState;

    case 'SET_HAS_NETWORK':
      newState = utils.objects.cloneObject(state);
      newState.hasNetwork = action.payload.hasNetwork;
      return newState;

    case 'ADD_PENDING_TRANSACTION':
      newState = utils.objects.cloneObject(state);
      newState.pendingTransactions.push(action.payload.event);
      return newState;

    case 'REMOVE_PENDING_TRANSACTION':
      newState = utils.objects.cloneObject(state);
      newState.pendingTransactions = newState.pendingTransactions.filter((event) => {
        return event.id !== action.payload.id;
      });
      return newState;

    case 'SET_CODE_PUSH_STATUS':
      newState = utils.objects.cloneObject(state);
      newState.codePushStatus = action.payload.codePushStatus;
      return newState;

    case 'SET_CODE_PUSH_DOWNLOAD_PROGRESS':
      newState = utils.objects.cloneObject(state);
      newState.codePushDownloadProgress = action.payload.codePushDownloadProgress;
      return newState;

    default:
      return state;
  }
}
