import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    paddingVertical: 100, // fixes squashed container when input is focussed
  },
  icon: {
    fontSize: 64,
    color: styleConstants.colors.secondary,
    marginBottom: styleConstants.dimensions.spacing.vertical,
  },
  titleText: {
    ...styleConstants.fonts.types.title,
    marginBottom: styleConstants.dimensions.spacing.vertical,
    textAlign: 'center',
  },
  descriptionText: { ...styleConstants.fonts.types.paragraph, textAlign: 'center' },
});

export default styles;