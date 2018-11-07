import { Platform } from 'react-native';

import styleConstants from '../../styleConstants';

/*
  addItem: {
    type: 'tooltip', // or modal
    emojiName: 'yum', // modal only
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
const TRIANGLE_SIZE = 20;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 22 : 0;
const HEADER_HEIGHT = 60;
const ITEM_HEIGHT = 51;
const SMALL_ICON_BUTTON_SIZE = 30;
const TAB_BAR_HEIGHT = 55;
const BUTTON_HEIGHT = 41.5;

const coachmarks = {
  addItem: {
    type: 'tooltip',
    titleText: 'Tap this to add an item',
    position: {
      bottom:
        ICON_BUTTON_SIZE +
        (styleConstants.dimensions.spacing.vertical + TOOLTIP_HEIGHT) / 2 -
        TRIANGLE_SIZE,
      right:
        ICON_BUTTON_SIZE +
        styleConstants.dimensions.spacing.horizontal * 2 +
        styleConstants.dimensions.spacing.horizontal / 2 -
        TRIANGLE_SIZE,
    },
    triangleOrientation: 90,
  },
  checkItem: {
    type: 'tooltip',
    titleText: 'Tap this to check an item',
    position: {
      top: STATUS_BAR_HEIGHT + HEADER_HEIGHT + (ITEM_HEIGHT - TOOLTIP_HEIGHT) / 2 - TRIANGLE_SIZE,
      left:
        styleConstants.dimensions.spacing.horizontal * 2 +
        SMALL_ICON_BUTTON_SIZE +
        styleConstants.dimensions.spacing.horizontal / 2 -
        TRIANGLE_SIZE,
    },
    triangleOrientation: 270,
  },
  checkout: {
    type: 'tooltip',
    titleText: 'Tap this to save and clear your list',
    position: {
      bottom:
        TAB_BAR_HEIGHT +
        styleConstants.dimensions.spacing.vertical +
        BUTTON_HEIGHT +
        (styleConstants.dimensions.spacing.vertical * 5) / 2 -
        TRIANGLE_SIZE / 2,
    },
    triangleOrientation: 180,
  },
  predictions: {
    type: 'modal',
    emojiName: 'yum',
    titleText: 'Easy as pie',
    descriptionText:
      "Congrats, you've added your first list. The next time you add the same items, we'll be able to start predicting how often you use them.",
  },
};

export default coachmarks;
