import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  text: PropTypes.string,
  handlePress: PropTypes.func,
  disabled: PropTypes.bool,
};

const defaultProps = {};

const Snackbar = ({ text, handlePress, disabled }) => {
  return (
    <Touchable onPress={handlePress} disabled={disabled} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Touchable>
  );
};

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
