import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styleConstants from '../../../styleConstants';
import styles from './styles';

import LinkText from '../../LinkText';

const propTypes = {
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      flex: PropTypes.number,
      fieldName: PropTypes.string,
    }),
  ).isRequired,
  handleHeaderItemPress: PropTypes.func.isRequired,
  height: PropTypes.number,
  headerTestIDPrefix: PropTypes.string,
};

const defaultProps = {};

const Header = ({ headerItems, handleHeaderItemPress, height, headerTestIDPrefix }) => {
  return (
    <View style={[styles.container, { height }]}>
      {headerItems.map((item, index) => {
        const isNotLastItem = index !== headerItems.length - 1;

        return (
          <View
            key={item.text}
            style={[
              styles.row,
              { flex: item.flex },
              { marginRight: isNotLastItem ? styleConstants.dimensions.spacing.horizontal : 0 },
            ]}
          >
            <LinkText
              text={item.text}
              handlePress={() => handleHeaderItemPress(item.fieldName)}
              testID={`${headerTestIDPrefix}${item.text}`}
            />

            <Icon name="swap-vert" style={styles.icon} />
          </View>
        );
      })}
    </View>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
