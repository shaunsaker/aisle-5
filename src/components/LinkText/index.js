import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  handlePress: PropTypes.func,
  testID: PropTypes.string,
};

const defaultProps = {};

const LinkText = ({ text, isActive, disabled, handlePress, testID }) => {
  return (
    <Touchable onPress={handlePress} disabled={disabled} style={styles.container} testID={testID}>
      <Text style={[styles.text, isActive && styles.activeText]}>{text && text.toUpperCase()}</Text>
    </Touchable>
  );
};

LinkText.propTypes = propTypes;
LinkText.defaultProps = defaultProps;

export default LinkText;
