import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  spacer: {
    width: styleConstants.dimensions.spacing.horizontal / 2,
  },
  disabled: {
    elevation: 0, // android
    shadowOpacity: 0, // ios
    opacity: 0.33,
  },
});

export default styles;
