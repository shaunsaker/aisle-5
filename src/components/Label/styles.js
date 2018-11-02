import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.accent,
    paddingVertical: styleConstants.dimensions.spacing.vertical / 2,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal / 2,
    ...styleConstants.shadows.regular,
    borderRadius: styleConstants.dimensions.borderRadius,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
    color: styleConstants.colors.white,
  },
});

export default styles;
