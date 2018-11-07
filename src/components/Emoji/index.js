import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import emoji from 'node-emoji';

import styles from './styles';

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {};

/*
 Returns an emoji if there is a match with the name
*/
const Emoji = ({ name, size }) => {
  const emojiMatches = name && emoji.search(name.toLowerCase());
  const emojiMatch = name && emojiMatches[0];
  const emojiKey = emojiMatch && emojiMatch.key;
  const actualEmoji = emojiKey && emoji.get(emojiKey);

  if (actualEmoji) {
    return <Text style={[styles.emoji, { fontSize: size }]}>{actualEmoji} </Text>;
  }

  return null;
};

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;

export default Emoji;
