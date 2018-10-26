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
});

export default styles;
