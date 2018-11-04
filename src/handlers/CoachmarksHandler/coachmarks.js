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
    triangleOrientation: 90, // tooltip only - can infer that it's on the RHS
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
    triangleOrientation: 90,
  },
  removeItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      top: 50,
      right: 50,
    },
    triangleOrientation: 90,
  },
  checkItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      top: 50,
      right: 50,
    },
    triangleOrientation: 90,
  },
  predictions: {
    type: 'modal',
    iconName: 'help-outline',
    titleText: 'Tap this to add an item',
    descriptionText: null,
  },
};

export default coachmarks;
