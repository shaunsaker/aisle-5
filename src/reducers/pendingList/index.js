import initialState from './initialState';
import utils from '../../utils';

export default function pendingListReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'ADD_PENDING_LIST_ITEM':
      newState = utils.objects.cloneObject(state);
      newState[action.payload.item.name] = action.payload.item;
      return newState;

    case 'SET_PENDING_LIST_ITEM_QUANTITY':
      newState = utils.objects.cloneObject(state);
      newState[action.payload.item.name].quantity = action.payload.value;
      return newState;

    case 'TOGGLE_PENDING_LIST_ITEM_IS_CHECKED':
      newState = utils.objects.cloneObject(state);
      newState[action.payload.item.name].isChecked = !newState[action.payload.item.name].isChecked;
      return newState;

    case 'RESET_PENDING_LIST':
      newState = utils.objects.cloneObject(state);
      newState = initialState;
      return newState;

    default:
      return state;
  }
}
