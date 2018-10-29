import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const propTypes = {
  height: PropTypes.number,
};

const defaultProps = {};

const Header = ({ height }) => {
  return (
    <View style={[styles.container, { height }]}>
      <Text style={styles.text}>NAME</Text>

      <Text style={styles.text}>LEFT OVER</Text>
    </View>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
