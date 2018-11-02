import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Animator from 'react-native-simple-animators';

import CheckBox from '../../CheckBox';
import ShoppingItem from '../../ShoppingItem';
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

      <View style={styles.shoppingItemContainer}>
        <ShoppingItem name={name} quantity={quantity} />
      </View>

      <Animator
        type="translateX"
        initialValue={0}
        finalValue={100}
        shouldAnimateIn={isChecked}
        shouldAnimateOut={!isChecked}
      >
        <Animator
          type="scale"
          initialValue={1}
          finalValue={0}
          shouldAnimateIn={isChecked}
          shouldAnimateOut={!isChecked}
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
