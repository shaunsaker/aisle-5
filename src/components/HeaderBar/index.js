import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './styles';

import NetworkActivityIndicator from '../NetworkActivityIndicator';

const propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const HeaderBar = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      <View style={styles.networkActivityIndicatorContainer}>
        <NetworkActivityIndicator />
      </View>
    </View>
  );
};

HeaderBar.propTypes = propTypes;
HeaderBar.defaultProps = defaultProps;

export default HeaderBar;
