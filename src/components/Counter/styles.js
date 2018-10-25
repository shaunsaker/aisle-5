import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
    ...styleConstants.fonts.families.medium,
    marginHorizontal: styleConstants.dimensions.spacing.horizontal / 2,
  },
});

export default styles;
