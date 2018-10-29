import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical / 2,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  text: {
    flex: 1,
    ...styleConstants.fonts.types.paragraph,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  consumptionContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  footerContainer: {
    marginTop: styleConstants.dimensions.spacing.vertical / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remainingQuantityTextContainer: {},
  remainingQuantityText: {
    ...styleConstants.fonts.types.extraSmall,
  },
  daysLeftTextContainer: {},
  daysLeftText: {
    ...styleConstants.fonts.types.extraSmall,
  },
  noDataText: {
    ...styleConstants.fonts.types.paragraph,
  },
});

export default styles;
