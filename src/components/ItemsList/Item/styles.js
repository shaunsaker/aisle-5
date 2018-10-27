import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: styleConstants.dimensions.spacing.horizontal,
  },
  checkBoxContainer: {
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
    flex: 1,
    marginRight: styleConstants.dimensions.spacing.horizontal,
  },
  countText: {
    ...styleConstants.fonts.types.paragraph,
    ...styleConstants.fonts.families.bold,
  },
});

export default styles;
