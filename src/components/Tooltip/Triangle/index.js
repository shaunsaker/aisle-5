import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const propTypes = {
  height: PropTypes.number,
};

const defaultProps = {};

const Triangle = ({ height }) => {
  return (
    <View
      style={[
        styles.container,
        { borderLeftWidth: height, borderRightWidth: height, borderBottomWidth: height },
      ]}
    />
  );
};

Triangle.propTypes = propTypes;
Triangle.defaultProps = defaultProps;

export default Triangle;
