import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Animator from 'react-native-simple-animators';

import styles from './styles';

import IconButton from '../IconButton';

const propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

const defaultProps = {};

const Counter = ({ value, handleChange }) => {
  return (
    <View style={styles.container}>
      <Animator type="opacity" initialValue={0.33} finalValue={1} shouldAnimateIn={value > 1}>
        <IconButton
          name="remove"
          small
          secondary
          handlePress={() => handleChange(value - 1)}
          disabled={value < 2}
        />
      </Animator>

      <Text style={styles.text}>{value}</Text>

      <IconButton name="add" small secondary handlePress={() => handleChange(value + 1)} />
    </View>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
