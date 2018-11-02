import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: styleConstants.dimensions.spacing.horizontal,
  },
  checkBoxContainer: {
    paddingRight: styleConstants.dimensions.spacing.horizontal,
  },
  deleteButtonContainer: {
    position: 'absolute',
    top: 0,
    right: styleConstants.dimensions.spacing.horizontal,
    bottom: 0,
    justifyContent: 'center',
  },
  shoppingItemContainer: {
    flex: 1,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
