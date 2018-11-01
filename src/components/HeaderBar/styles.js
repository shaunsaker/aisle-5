import { StyleSheet } from 'react-native';

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
    height: HEADER_HEIGHT,
    justifyContent: 'center',
  },
  networkActivityIndicatorContainer: {
    position: 'absolute',
    top: 0,
    right: styleConstants.dimensions.spacing.horizontal,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default styles;
