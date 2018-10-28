import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: styleConstants.dimensions.spacing.vertical,
  },
  row: {
    flexDirection: 'row',
    marginBottom: styleConstants.dimensions.spacing.vertical,
    marginLeft: styleConstants.dimensions.spacing.horizontal,
    marginRight: styleConstants.dimensions.spacing.horizontal / 2,
  },
  column: {
    flex: 1,
    marginRight: styleConstants.dimensions.spacing.horizontal / 2,
  },
  noDataContainer: {},
  headerText: {
    ...styleConstants.fonts.types.small,
    ...styleConstants.fonts.families.bold,
    textDecorationLine: 'underline',
  },
  text: {
    ...styleConstants.fonts.types.small,
  },
});

export default styles;
