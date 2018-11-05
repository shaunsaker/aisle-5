import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: styleConstants.dimensions.spacing.vertical,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
    textAlign: 'center',
    marginBottom: styleConstants.dimensions.spacing.vertical,
  },
  titleText: {
    ...styleConstants.fonts.types.title,
    textAlign: 'center',
    marginBottom: styleConstants.dimensions.spacing.vertical,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonSpacer: {
    width: styleConstants.dimensions.spacing.horizontal,
  },
});

export default styles;
