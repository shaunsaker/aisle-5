import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 30;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.colors.white,
    ...styleConstants.shadows.regular,
    borderWidth: 1,
    borderColor: styleConstants.colors.dividerColor,
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.secondary,
  },
});

export default styles;
