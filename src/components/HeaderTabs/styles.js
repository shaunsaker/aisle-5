import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.colors.dividerColor,
    height: 51, // item height
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  activeTabContainer: {},
  text: {
    ...styleConstants.fonts.types.small,
    ...styleConstants.fonts.families.bold,
    textDecorationLine: 'underline',
  },
  activeTabText: {
    color: styleConstants.colors.accent,
  },
});

export default styles;
