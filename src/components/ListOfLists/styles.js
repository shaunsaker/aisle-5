import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
  headerWrapper: {
    backgroundColor: styleConstants.colors.white,
  },
  headerContainer: {
    justifyContent: 'center',
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  itemWrapper: {},
  itemContainer: {
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
