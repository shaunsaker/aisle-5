import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import LinkText from '../LinkText';

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
          <View key={item.text} style={[styles.tabContainer, styles.activeTabContainer]}>
            <LinkText
              text={item.text}
              isActive={isActive}
              handlePress={() => handleTabPress(item)}
              testID={`${headerTestIDPrefix}${item.text}`}
            />
          </View>
        );
      })}
    </View>
  );
};

HeaderTabs.propTypes = propTypes;
HeaderTabs.defaultProps = defaultProps;

export default HeaderTabs;
