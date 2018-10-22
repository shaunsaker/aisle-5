import React from 'react';
import PropTypes from 'prop-types';
import { Text, ActivityIndicator } from 'react-native';

import styleConstants from '../../styleConstants';
import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  handlePress: PropTypes.func,
  testID: PropTypes.string,
  showLoader: PropTypes.bool,
};

const defaultProps = {};

/*
  This component's responsibility is to:

  - Render a Touchable container with the following states:
    - Default
    - Primary
    - Disabled
    - Loading
*/
const Button = ({ text, primary, disabled, handlePress, testID, showLoader }) => {
  const textComponent = showLoader ? (
    <ActivityIndicator size="small" color={styleConstants.colors.primaryText} />
  ) : (
    <Text style={[styles.text, primary && styles.primaryText, disabled && styles.disabledText]}>
      {text}
    </Text>
  );

  return (
    <Touchable
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.container,
        primary && styles.primaryContainer,
        disabled && styles.disabledContainer,
      ]}
      testID={testID || 'Button'}
    >
      {textComponent}
    </Touchable>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
