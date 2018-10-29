import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Animator from 'react-native-simple-animators';

import utils from '../../../../utils';
import styleConstants from '../../../../styleConstants';
import styles from './styles';

const propTypes = {
  value: PropTypes.number,
  width: PropTypes.number,
};

const defaultProps = {};

const INNER_PADDING = styleConstants.dimensions.spacing.horizontal / 2;

const ProgressBar = ({ value, width }) => {
  const containerWidth = (value * (width - INNER_PADDING * 2)) / 100; // value is a %
  const valueAsInt = value / 100;
  const containerColor = utils.app.getColor(1 - valueAsInt);

  return (
    <View style={[styles.wrapper, { width }]}>
      <Animator
        type="width"
        initialValue={0}
        finalValue={containerWidth}
        shouldAnimateIn
        easing={styleConstants.easing}
        delay={100}
        style={[styles.container, { width: containerWidth, backgroundColor: containerColor }]}
      />
    </View>
  );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
