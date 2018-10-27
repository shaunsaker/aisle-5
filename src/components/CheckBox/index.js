import React from 'react';
import PropTypes from 'prop-types';
import Animator from 'react-native-simple-animators';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  isChecked: PropTypes.bool,
  handlePress: PropTypes.func,
};

const defaultProps = {};

const CheckBox = ({ isChecked, handlePress }) => {
  return (
    <Touchable onPress={handlePress} style={styles.container}>
      <Animator
        type="scale"
        initialValue={0}
        finalValue={1}
        shouldAnimateIn={isChecked}
        shouldAnimateOut={!isChecked}
      >
        <Icon name="check" style={styles.icon} />
      </Animator>
    </Touchable>
  );
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
