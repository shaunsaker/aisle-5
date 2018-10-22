import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 50;

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
  icon: {
    fontSize: 30,
    color: styleConstants.colors.white,
  },
});

export default styles;
