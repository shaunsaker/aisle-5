import styleConstants from '../../styleConstants';

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

const ICON_BUTTON_SIZE = 50;
const TOOLTIP_HEIGHT = 39;

const coachmarks = {
  addItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      bottom: ICON_BUTTON_SIZE + (styleConstants.dimensions.spacing.vertical + TOOLTIP_HEIGHT) / 2, // icon button + vertical spacing / 2 + tooltip height / 2
      right:
        ICON_BUTTON_SIZE +
        styleConstants.dimensions.spacing.horizontal * 2 +
        styleConstants.dimensions.spacing.horizontal / 2, // icon button + horizontal spacing
    },
    triangleOrientation: 90,
  },
  removeItem: {
    type: 'tooltip',
    titleText: 'Tap this to remove an item',
    position: {
      top: 50,
      right: 50,
    },
    triangleOrientation: 90,
  },
  checkItem: {
    type: 'tooltip',
    titleText: 'Tap this to mark an item as checked',
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
