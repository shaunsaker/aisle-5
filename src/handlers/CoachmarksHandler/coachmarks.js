/*
  addItem: {
    type: 'tooltip', // or modal
    iconName: 'help-outline', // modal only
    titleText: 'Tap this to add an item',
    descriptionText: null, // modal only
    position: {
      top: 50,
      right: 50,
    }, // tooltip only
    arrowDirection: '90deg', // tooltip only - can infer that it's on the RHS
  },
*/

const coachmarks = {
  addItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      top: 50,
      right: 50,
    },
    arrowDirection: '90deg',
  },
  removeItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      top: 50,
      right: 50,
    },
    arrowDirection: '90deg',
  },
  checkItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      top: 50,
      right: 50,
    },
    arrowDirection: '90deg',
  },
  predictions: {
    type: 'modal',
    iconName: 'help-outline',
    titleText: 'Tap this to add an item',
    descriptionText: null,
  },
};

export default coachmarks;
