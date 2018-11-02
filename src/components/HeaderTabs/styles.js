import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: styleConstants.colors.dividerColor,
    height: 51, // item height
  },
  tabContainer: {
    flex: 1,
    paddingVertical: styleConstants.dimensions.spacing.vertical,
    paddingHorizontal: styleConstants.dimensions.spacing.horizontal,
    alignItems: 'center',
  },
  activeTabContainer: {},
});

export default styles;
