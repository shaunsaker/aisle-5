import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import CustomIcon from '../../assets/icons';

const propTypes = {};

const defaultProps = {};

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A</Text>

      <CustomIcon name="logo" style={styles.icon} />

      <Text style={styles.text}>SLE 5</Text>
    </View>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
