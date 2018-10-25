import initialState from './initialState';
import utils from '../../utils';

export default function itemsReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'ADD_ITEM':
      const itemID = action.payload.item.name;

      newState = utils.objects.cloneObject(state);
      newState[itemID] = action.payload.item;
      return newState;

    default:
      return state;
  }
}
