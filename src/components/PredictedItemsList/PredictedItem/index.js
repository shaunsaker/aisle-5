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

const PROGRESS_BAR_WIDTH = 160;

const PredictedItem = ({
  name,
  remainingQuantityPercentage,
  daysLeftUntilZeroQuantity,
  height,
}) => {
  const daysLeftText = `${Math.floor(daysLeftUntilZeroQuantity)} days`;

  return (
    <View style={[styles.container, { height }]}>
      <Text numberOfLines={1} style={styles.text}>
        {name}
      </Text>

      <View style={styles.consumptionContainer}>
        <ProgressBar value={remainingQuantityPercentage} />

        <View style={styles.daysLeftTextContainer}>
          <Text style={styles.daysLeftText}>{daysLeftText}</Text>
        </View>
      </View>
    </View>
  );
};

PredictedItem.propTypes = propTypes;
PredictedItem.defaultProps = defaultProps;

export default PredictedItem;
