import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {};

const ShoppingItem = ({ name, quantity, height }) => {
  return (
    <View style={[styles.container, { height }]}>
      <Text style={styles.countText}>{quantity}</Text>

      <Text style={styles.text}>{` x ${name}`}</Text>
    </View>
  );
};

ShoppingItem.propTypes = propTypes;
ShoppingItem.defaultProps = defaultProps;

export default ShoppingItem;
