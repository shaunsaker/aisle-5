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
    backgroundColor: styleConstants.colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...styleConstants.fonts.types.small,
    ...styleConstants.fonts.families.bold,
    textDecorationLine: 'underline',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
    marginLeft: styleConstants.dimensions.spacing.horizontal / 2,
  },
});

export default styles;
