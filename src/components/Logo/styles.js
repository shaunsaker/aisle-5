import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const LETTER_SPACING = 5;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...styleConstants.fonts.types.title,
    color: styleConstants.colors.white,
    letterSpacing: LETTER_SPACING,
  },
  icon: {
    fontSize: 18,
    color: styleConstants.colors.secondary,
    marginRight: LETTER_SPACING,
  },
});

export default styles;
