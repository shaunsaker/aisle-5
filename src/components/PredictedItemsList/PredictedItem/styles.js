import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  text: {
    flex: 1,
    ...styleConstants.fonts.types.small,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  consumptionContainer: {
    flex: 2,
  },
  daysLeftTextContainer: {
    position: 'absolute',
    top: 0,
    right: styleConstants.dimensions.spacing.horizontal / 2,
    bottom: 0,
    justifyContent: 'center',
  },
  daysLeftText: {
    ...styleConstants.fonts.types.small,
    color: styleConstants.colors.dividerColor,
  },
});

export default styles;
