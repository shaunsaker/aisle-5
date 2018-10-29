import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import ProgressBar from './ProgressBar';

const propTypes = {
  name: PropTypes.string,
  averageUsagePerDay: PropTypes.number,
  previouslyPurchasedQuantity: PropTypes.number,
  remainingQuantity: PropTypes.number,
  remainingQuantityPercentage: PropTypes.number,
  daysLeftUntilZeroQuantity: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {};

const PredictedItem = ({
  name,
  averageUsagePerDay,
  previouslyPurchasedQuantity,
  remainingQuantity,
  remainingQuantityPercentage,
  daysLeftUntilZeroQuantity,
  height,
}) => {
  /*
    TODO: If there is only one previouslyPurchasedQuantity, round to the nearest digit
    TODO: Animate bar width, wrapper bg color, days left?, current quantity?
  */
  let consumptionComponent;

  if (remainingQuantityPercentage === null) {
    // Not enough data
    consumptionComponent = (
      <View style={styles.consumptionContainer}>
        <Text style={styles.noDataText}>Not enough data</Text>
      </View>
    );
  } else {
    const remainingQuantityText = `${Math.floor(
      remainingQuantity,
    )} / ${previouslyPurchasedQuantity} unit${previouslyPurchasedQuantity > 1 ? 's' : ''}`;
    const daysLeftText = `${Math.floor(daysLeftUntilZeroQuantity)} day${
      daysLeftUntilZeroQuantity > 1 || daysLeftUntilZeroQuantity === 0 ? 's' : ''
    } left`;

    consumptionComponent = (
      <View style={styles.consumptionContainer}>
        <ProgressBar value={remainingQuantityPercentage} />

        <View style={styles.footerContainer}>
          <View style={styles.remainingQuantityTextContainer}>
            <Text style={styles.remainingQuantityText}>{remainingQuantityText}</Text>
          </View>

          <View style={styles.daysLeftTextContainer}>
            <Text style={styles.daysLeftText}>{daysLeftText}</Text>
          </View>
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
