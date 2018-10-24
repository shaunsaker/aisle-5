import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  iconName: PropTypes.string,
  handlePress: PropTypes.func,
};

const defaultProps = {};

const TouchableIcon = ({ iconName, handlePress }) => {
  return (
    <Touchable onPress={handlePress} style={styles.container}>
      <Icon name={iconName} style={styles.icon} />
    </Touchable>
  );
};

TouchableIcon.propTypes = propTypes;
TouchableIcon.defaultProps = defaultProps;

export default TouchableIcon;
