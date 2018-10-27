import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Animator from 'react-native-simple-animators';

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
      <Animator
        type="opacity"
        initialValue={0.33}
        finalValue={1}
        shouldAnimateIn={shouldEnableDecrementButton}
        shouldAnimateOut={!shouldEnableDecrementButton}
      >
        <IconButton
          name="remove"
          small
          secondary
          handlePress={() => handleChange(value - 1)}
          disabled={!shouldEnableDecrementButton}
          style={styles.noShadow}
        />
      </Animator>

      <View style={styles.spacer} />

      <IconButton name="add" small secondary handlePress={() => handleChange(value + 1)} />
    </View>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
