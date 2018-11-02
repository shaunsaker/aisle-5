import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import Emoji from '../Emoji';

const propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {};

const ShoppingItem = ({ name, quantity, height }) => {
  const quantityComponent = quantity ? (
    <Fragment>
      <Text style={styles.countText}>{quantity}</Text>

      <Text style={styles.xText}> x </Text>
    </Fragment>
  ) : null;

  return (
    <View style={[styles.container, { height }]}>
      {quantityComponent}

      <View style={styles.emojiContainer}>
        <Emoji name={name} />
      </View>

      <Text numberOfLines={1} style={styles.nameText}>
        {name}
      </Text>
    </View>
  );
};

ShoppingItem.propTypes = propTypes;
ShoppingItem.defaultProps = defaultProps;

export default ShoppingItem;
