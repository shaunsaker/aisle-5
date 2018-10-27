import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingRight: 50 + styleConstants.dimensions.spacing.horizontal, // iconButton
  },
  itemContainer: {
    paddingLeft: styleConstants.dimensions.spacing.horizontal / 2,
    paddingRight: styleConstants.dimensions.spacing.horizontal / 2,
    paddingBottom: styleConstants.dimensions.spacing.vertical,
  },
  firstItemContainer: {
    paddingLeft: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
