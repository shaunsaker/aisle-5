import { StyleSheet, Platform } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  snackbarContainer: {
    position: 'absolute',
    top: 60 + (Platform.OS === 'ios' ? 22 : 0), // heeader bar + ios status bar
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
