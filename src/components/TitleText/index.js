import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styleConstants from '../../styleConstants';

import styles from './styles';

const propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  color: styleConstants.colors.white,
};

const TitleText = ({ text, color }) => {
  return <Text style={[styles.text, { color }]}>{text}</Text>;
};

TitleText.propTypes = propTypes;
TitleText.defaultProps = defaultProps;

export default TitleText;
