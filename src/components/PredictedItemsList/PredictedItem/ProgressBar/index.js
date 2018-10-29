import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import utils from '../../../../utils';
import styleConstants from '../../../../styleConstants';
import styles from './styles';

const propTypes = {
  value: PropTypes.number,
};

const defaultProps = {};

const ProgressBar = ({ value }) => {
  const valueAsInt = value / 100;
  const wrapperColor = utils.app.getColor(1 - valueAsInt);

  return (
    <View style={[styles.wrapper, { backgroundColor: wrapperColor }]}>
      <View style={[styles.container, { width: value }]} />
    </View>
  );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
