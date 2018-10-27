import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

import IconButton from '../IconButton';

const propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

const defaultProps = {};

const Counter = ({ value, handleChange }) => {
  const shouldEnableDecrementButton = value > 1;

  return (
    <View style={styles.container}>
      <IconButton
        name="remove"
        small
        secondary
        handlePress={() => handleChange(value - 1)}
        disabled={!shouldEnableDecrementButton}
        style={!shouldEnableDecrementButton && styles.disabled}
      />

      <View style={styles.spacer} />

      <IconButton name="add" small secondary handlePress={() => handleChange(value + 1)} />
    </View>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
