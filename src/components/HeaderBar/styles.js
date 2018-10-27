import { StyleSheet, Platform } from 'react-native';

import styleConstants from '../../styleConstants';

const HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: styleConstants.helpers.isIphoneX ? 24 : styleConstants.dimensions.spacing.vertical,
    paddingBottom: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
    backgroundColor: styleConstants.colors.primary,
    ...styleConstants.shadows.large,
    minHeight: Platform.OS === 'ios' ? 22 + HEADER_HEIGHT : HEADER_HEIGHT,
    maxHeight: Platform.OS === 'ios' ? 22 + HEADER_HEIGHT : HEADER_HEIGHT,
    justifyContent: 'center',
  },
});

export default styles;
