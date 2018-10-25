import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 50;
const SMALL_SIZE = 24;

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
  },
  secondaryContainer: {
    backgroundColor: styleConstants.colors.accent,
  },
  icon: {
    fontSize: 30,
    color: styleConstants.colors.white,
  },
  smallIcon: {
    fontSize: 16,
  },
});

export default styles;
