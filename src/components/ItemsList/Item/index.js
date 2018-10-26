import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Animator from 'react-native-simple-animators';

import CheckBox from '../../CheckBox';
import Counter from '../../Counter';

import styles from './styles';

const propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  quantity: PropTypes.number,
  handleSetIsChecked: PropTypes.func,
  handleSetQuantity: PropTypes.func,
};

const defaultProps = {};

const Item = ({ name, isChecked, quantity, handleSetIsChecked, handleSetQuantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <CheckBox isChecked={isChecked} handlePress={handleSetIsChecked} />
      </View>

      <Text style={styles.countText}>{quantity}</Text>

      <Text style={styles.text}>{` x ${name}`}</Text>

      <Animator
        type="translateX"
        initialValue={100}
        finalValue={0}
        shouldAnimateIn={!isChecked}
        shouldAnimateOut={isChecked}
      >
        <Animator
          type="scale"
          initialValue={0}
          finalValue={1}
          shouldAnimateIn={!isChecked}
          shouldAnimateOut={isChecked}
        >
          <Counter value={quantity} handleChange={handleSetQuantity} />
        </Animator>
      </Animator>
    </View>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
