import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const ModalCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

ModalCard.propTypes = propTypes;
ModalCard.defaultProps = defaultProps;

export default ModalCard;
