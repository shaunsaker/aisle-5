import { StyleSheet } from 'react-native';

import styleConstants from '../../../../styleConstants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    borderRadius: styleConstants.dimensions.borderRadius,
    overflow: 'hidden',
  },
  container: {
    borderRadius: styleConstants.dimensions.borderRadius,
    position: 'absolute',
    top: styleConstants.dimensions.spacing.vertical / 2,
    bottom: styleConstants.dimensions.spacing.vertical / 2,
    left: styleConstants.dimensions.spacing.horizontal / 2,
    backgroundColor: styleConstants.colors.white,
    ...styleConstants.shadows.small,
  },
});

export default styles;
