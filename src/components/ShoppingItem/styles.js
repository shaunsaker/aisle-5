import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    ...styleConstants.fonts.types.paragraph,
    ...styleConstants.fonts.families.bold,
  },
  text: {
    ...styleConstants.fonts.types.paragraph,
  },
  emojiContainer: {},
  emoji: {
    fontSize: styleConstants.fonts.sizes.emoji,
  },
});

export default styles;
