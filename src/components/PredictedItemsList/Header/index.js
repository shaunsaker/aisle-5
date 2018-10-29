import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styleConstants from '../../../styleConstants';
import styles from './styles';

import Touchable from '../../Touchable';

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
          <Touchable
            key={item.text}
            onPress={() => handleHeaderItemPress(item.fieldName)}
            style={[
              styles.row,
              { flex: item.flex },
              { marginRight: isNotLastItem ? styleConstants.dimensions.spacing.horizontal / 2 : 0 },
            ]}
            testID={`${headerTestIDPrefix}${item.text}`}
          >
            <Text style={styles.text}>{item.text}</Text>

            <Icon name="swap-vert" style={styles.icon} />
          </Touchable>
        );
      })}
    </View>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
