import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.secondary,
    borderRadius: styleConstants.dimensions.borderRadius,
    ...styleConstants.shadows.large,
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  text: {
    ...styleConstants.fonts.types.small,
    color: styleConstants.colors.dividerColor,
    textAlign: 'center',
  },
});

export default styles;
