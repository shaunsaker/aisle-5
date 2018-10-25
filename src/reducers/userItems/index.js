import initialState from './initialState';

export default function userItemsReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_USER_ITEMS':
      newState = initialState; // reset it to initial state

      // Iterate over the collection, setting each document
      // as an object on newState indexed by documentID
      action.payload.data.forEach((document) => {
        const key = document.id;

        newState[key] = document;
      });

      return newState;

    default:
      return state;
  }
}
