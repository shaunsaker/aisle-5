import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    width: styleConstants.dimensions.spacing.horizontal / 2,
  },
  noShadow: {
    elevation: 0, // android
    shadowOpacity: 0, // ios
  },
});

export default styles;
