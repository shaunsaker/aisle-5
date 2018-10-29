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
      <View style={styles.firstColumn}>
        <Text style={styles.text}>NAME</Text>
      </View>

      <View style={styles.secondColumn}>
        <Text style={styles.text}>CONSUMPTION</Text>
      </View>
    </View>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
