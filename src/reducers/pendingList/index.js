import initialState from './initialState';
import utils from '../../utils';

export default function pendingListReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'ADD_PENDING_LIST_ITEM':
      newState = utils.objects.cloneObject(state);
      newState[action.payload.item.name] = action.payload.item;
      return newState;

    default:
      return state;
  }
}
