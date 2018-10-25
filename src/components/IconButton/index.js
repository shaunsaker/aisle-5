import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  name: PropTypes.string,
  handlePress: PropTypes.func,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
};

const defaultProps = {};

const IconButton = ({ name, handlePress, small, secondary }) => {
  return (
    <Touchable
      onPress={handlePress}
      style={[
        styles.container,
        small && styles.smallContainer,
        secondary && styles.secondaryContainer,
      ]}
    >
      <Icon
        name={name}
        style={[styles.icon, small && styles.smallIcon, secondary && styles.secondaryIcon]}
      />
    </Touchable>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
