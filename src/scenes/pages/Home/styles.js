import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  headerBar: {
    height: 60,
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: styleConstants.dimensions.spacing.horizontal,
    right: styleConstants.dimensions.spacing.horizontal,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconContainer: {
    marginRight: styleConstants.dimensions.spacing.horizontal / 2,
  },
  addItemButtonContainer: {
    position: 'absolute',
    bottom: styleConstants.dimensions.spacing.horizontal,
    right: styleConstants.dimensions.spacing.horizontal,
  },
  submitItemButtonContainer: {
    position: 'absolute',
    bottom: styleConstants.dimensions.spacing.horizontal,
    right: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
