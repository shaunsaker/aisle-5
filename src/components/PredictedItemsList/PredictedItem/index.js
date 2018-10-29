import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import ProgressBar from './ProgressBar';

const propTypes = {
  name: PropTypes.string,
  remainingQuantityPercentage: PropTypes.number,
  daysLeftUntilZeroQuantity: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {};

const PredictedItem = ({
  name,
  remainingQuantityPercentage,
  daysLeftUntilZeroQuantity,
  height,
}) => {
  let consumptionComponent;

  if (remainingQuantityPercentage === null) {
    // Not enough data
    consumptionComponent = (
      <View style={styles.consumptionContainer}>
        <Text style={styles.noDataText}>Not enough data</Text>
      </View>
    );
  } else {
    const daysLeftText = `${Math.floor(daysLeftUntilZeroQuantity)} day${
      daysLeftUntilZeroQuantity !== 1 ? 's' : ''
    } left`;

    consumptionComponent = (
      <View style={styles.consumptionContainer}>
        <ProgressBar value={remainingQuantityPercentage} />

        <View style={styles.daysLeftTextContainer}>
          <Text style={styles.daysLeftText}>{daysLeftText}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { height }]}>
      <Text numberOfLines={1} style={styles.text}>
        {name}
      </Text>

      {consumptionComponent}
    </View>
  );
};

PredictedItem.propTypes = propTypes;
PredictedItem.defaultProps = defaultProps;

export default PredictedItem;
