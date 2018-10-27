import initialState from './initialState';
import utils from '../../utils';

export default function deviceInfoReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_UNIQUE_ID':
      newState = utils.objects.cloneObject(state);
      newState.uniqueID = action.payload.uniqueID;
      return newState;

    default:
      return state;
  }
}
