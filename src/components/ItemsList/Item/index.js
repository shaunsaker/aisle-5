import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

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

      <Text style={styles.text}>{name}</Text>

      <Counter value={quantity} handleChange={handleSetQuantity} />
    </View>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
