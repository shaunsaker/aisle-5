import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: styleConstants.colors.dividerColor,
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  firstColumn: {
    flex: 1,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  secondColumn: {
    flex: 2,
  },
  text: {
    ...styleConstants.fonts.types.small,
    ...styleConstants.fonts.families.bold,
  },
});

export default styles;
