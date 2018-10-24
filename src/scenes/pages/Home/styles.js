import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  iconButtonContainer: {
    position: 'absolute',
    bottom: styleConstants.dimensions.spacing.horizontal,
    right: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
