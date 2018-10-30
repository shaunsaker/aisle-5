import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import Touchable from '../Touchable';

const propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
  activeTab: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  handleTabPress: PropTypes.func.isRequired,
  headerTestIDPrefix: PropTypes.string,
};

const defaultProps = {};

const HeaderTabs = ({ tabs, activeTab, handleTabPress, headerTestIDPrefix }) => {
  return (
    <View style={styles.container}>
      {tabs.map((item) => {
        const isActive = item.text === activeTab.text;

        return (
          <Touchable
            key={item.text}
            onPress={() => handleTabPress(item)}
            style={[styles.tabContainer, styles.activeTabContainer]}
            testID={`${headerTestIDPrefix}${item.text}`}
          >
            <Text style={[styles.text, isActive && styles.activeTabText]}>{item.text}</Text>
          </Touchable>
        );
      })}
    </View>
  );
};

HeaderTabs.propTypes = propTypes;
HeaderTabs.defaultProps = defaultProps;

export default HeaderTabs;
