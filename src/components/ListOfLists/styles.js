import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
  headerContainer: {
    justifyContent: 'center',
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  itemContainer: {
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
