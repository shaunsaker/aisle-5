import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const BORDER_BOTTOM_WIDTH = 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: styleConstants.colors.primary,
    ...styleConstants.shadows.large,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical / 2,
    paddingBottom: styleConstants.dimensions.spacing.vertical / 2 + BORDER_BOTTOM_WIDTH,
  },
  activeTabContainer: {},
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.transWhite,
  },
  text: {
    ...styleConstants.fonts.types.small,
    color: styleConstants.colors.transWhite,
  },
  activeText: {
    color: styleConstants.colors.white,
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomWidth: BORDER_BOTTOM_WIDTH,
    borderBottomColor: styleConstants.colors.white,
  },
});

export default styles;
