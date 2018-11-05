import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.white,
    borderRadius: styleConstants.dimensions.borderRadius,
    marginVertical: styleConstants.dimensions.spacing.vertical,
    marginHorizontal: styleConstants.dimensions.spacing.horizontal,
    paddingVertical: styleConstants.dimensions.spacing.vertical * 2,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal * 2,
    ...styleConstants.shadows.large,
    maxWidth: 480, // tablets
  },
});

export default styles;
