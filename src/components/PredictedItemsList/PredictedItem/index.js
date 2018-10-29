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

const PROGRESS_BAR_WIDTH = 120;

const PredictedItem = ({
  name,
  remainingQuantityPercentage,
  daysLeftUntilZeroQuantity,
  height,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <Text style={styles.text}>{name}</Text>

      <View style={styles.progressBarContainer}>
        <ProgressBar value={remainingQuantityPercentage} width={PROGRESS_BAR_WIDTH} />
      </View>
    </View>
  );
};

PredictedItem.propTypes = propTypes;
PredictedItem.defaultProps = defaultProps;

export default PredictedItem;
