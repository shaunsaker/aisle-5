import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  countText: {
    ...styleConstants.fonts.types.paragraph,
    ...styleConstants.fonts.families.bold,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
  },
});

export default styles;
