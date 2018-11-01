import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

import IconButton from '../IconButton';

const propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

const defaultProps = {};

const Counter = ({ value, handleChange }) => {
  return (
    <View style={styles.container}>
      <IconButton name="remove" small secondary handlePress={() => handleChange(value - 1)} />

      <View style={styles.spacer} />

      <IconButton name="add" small secondary handlePress={() => handleChange(value + 1)} />
    </View>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
