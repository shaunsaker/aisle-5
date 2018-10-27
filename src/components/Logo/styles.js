import { StyleSheet, Platform } from 'react-native';

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
    marginLeft: Platform.OS == 'android' ? LETTER_SPACING : 0,
    marginRight: LETTER_SPACING,
  },
});

export default styles;
