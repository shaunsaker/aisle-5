import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Animator from 'react-native-simple-animators';

import CheckBox from '../../CheckBox';
import Counter from '../../Counter';
import IconButton from '../../IconButton';

import styles from './styles';

const propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  quantity: PropTypes.number,
  handleSetIsChecked: PropTypes.func,
  handleSetQuantity: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};

const defaultProps = {};

const Item = ({
  name,
  isChecked,
  quantity,
  handleSetIsChecked,
  handleSetQuantity,
  handleRemoveItem,
}) => {
  const deleteButtonComponent = isChecked ? (
    <Animator
      type="translateX"
      initialValue={100}
      finalValue={0}
      shouldAnimateIn={isChecked}
      shouldAnimateOut={!isChecked}
      style={styles.deleteButtonContainer}
    >
      <Animator
        type="scale"
        initialValue={0}
        finalValue={1}
        shouldAnimateIn={isChecked}
        shouldAnimateOut={!isChecked}
      >
        <IconButton name="delete" small secondary handlePress={handleRemoveItem} />
      </Animator>
    </Animator>
  ) : null;

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <CheckBox isChecked={isChecked} handlePress={handleSetIsChecked} />
      </View>

      <Text style={styles.countText}>{quantity}</Text>

      <Text style={styles.text}>{` x ${name}`}</Text>

      {deleteButtonComponent}

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
