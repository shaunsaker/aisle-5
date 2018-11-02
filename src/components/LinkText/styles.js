import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  text: {
    ...styleConstants.fonts.types.small,
    ...styleConstants.fonts.families.bold,
    color: styleConstants.colors.primary,
    textDecorationLine: 'underline',
  },
  activeText: {
    color: styleConstants.colors.accent,
  },
});

export default styles;
