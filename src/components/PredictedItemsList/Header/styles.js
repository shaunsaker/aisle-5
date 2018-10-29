import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.colors.dividerColor,
  },
  firstColumn: {
    flex: 1,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  secondColumn: {
    flex: 2,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
    ...styleConstants.fonts.families.bold,
    textDecorationLine: 'underline',
  },
});

export default styles;
