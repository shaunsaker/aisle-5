import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 50;
const SMALL_SIZE = 30;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: styleConstants.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...styleConstants.shadows.large,
  },
  smallContainer: {
    width: SMALL_SIZE,
    height: SMALL_SIZE,
    borderRadius: SMALL_SIZE,
    ...styleConstants.shadows.regular,
  },
  secondaryContainer: {
    backgroundColor: styleConstants.colors.dividerColor,
  },
  icon: {
    fontSize: 30,
    color: styleConstants.colors.white,
  },
  smallIcon: {
    fontSize: (SMALL_SIZE * 2) / 3,
  },
  secondaryIcon: {
    color: styleConstants.colors.primary,
  },
});

export default styles;
