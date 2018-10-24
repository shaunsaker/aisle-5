import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  icon: {
    fontSize: 30,
    color: styleConstants.colors.white,
    transform: [
      {
        translateX: -4,
      },
    ],
  },
});

export default styles;
