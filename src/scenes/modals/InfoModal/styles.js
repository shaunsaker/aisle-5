import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  titleText: {
    ...styleConstants.fonts.types.title,
    textAlign: 'center',
    marginBottom: styleConstants.dimensions.spacing.vertical,
  },
  descriptionText: {
    ...styleConstants.fonts.types.paragraph,
    textAlign: 'center',
    marginBottom: styleConstants.dimensions.spacing.vertical * 2,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default styles;
