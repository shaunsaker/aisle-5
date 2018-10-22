import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  name: PropTypes.string,
  handlePress: PropTypes.func,
};

const defaultProps = {};

const IconButton = ({ name, handlePress }) => {
  return (
    <Touchable onPress={handlePress} style={styles.container}>
      <Icon name={name} style={styles.icon} />
    </Touchable>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
