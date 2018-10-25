import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    paddingLeft: styleConstants.dimensions.spacing.horizontal,
    paddingBottom: styleConstants.dimensions.spacing.vertical,
  },
  contentContainer: {
    paddingRight: 50 + 2 * styleConstants.dimensions.spacing.horizontal, // iconButton
  },
  itemContainer: {
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
