import { StyleSheet } from 'react-native';

import styleConstants from '../../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
  },
  text: {
    flex: 1,
    ...styleConstants.fonts.types.small,
  },
  progressBarContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
