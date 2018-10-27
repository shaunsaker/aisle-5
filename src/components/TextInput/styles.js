import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

// @WADE: error and success styles are commented out. If input validation is not needed, let me know because it will be better to remove the logic for that as opposed to just removing the styles

const styles = StyleSheet.create({
  input: {
    flex: 1,
    ...styleConstants.fonts.types.paragraph,
    backgroundColor: styleConstants.colors.white,
    borderWidth: 1,
    borderColor: styleConstants.colors.dividerColor,
    borderRadius: styleConstants.dimensions.borderRadius,
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  error: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    color: styleConstants.colors.danger,
    borderColor: 'rgba(255, 0, 0, 0.5)',
  },
  success: {},
});

export default styles;
