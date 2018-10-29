import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

import styles from './styles';

import Header from './Header';
import PredictedItem from './PredictedItem';
import ItemSeparator from '../ItemSeparator';

import HEADER_ITEMS from './headerItems';

export default class PredictedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);

    this.itemHeight = 51;

    this.state = {};
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleHeaderItemPress: PropTypes.func,
    headerTestIDPrefix: PropTypes.string,
  };

  static defaultProps = {};

  renderListHeader() {
    const { handleHeaderItemPress, headerTestIDPrefix } = this.props;

    return (
      <Header
        headerItems={HEADER_ITEMS}
        handleHeaderItemPress={handleHeaderItemPress}
        height={this.itemHeight}
        headerTestIDPrefix={headerTestIDPrefix}
      />
    );
  }

  renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <PredictedItem {...item} height={this.itemHeight} />
      </View>
    );
  }

  renderItemSeparator() {
    return <ItemSeparator />;
  }

  render() {
    const { data } = this.props;

    return (
      <FlatList
        ref={(c) => {
          this.flatList = c;
        }}
        keyExtractor={({ id }) => id}
        data={data}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={(data, index) => ({
          length: this.itemHeight,
          offset: this.itemHeight * index,
          index,
        })}
        bounces={false}
        ListHeaderComponent={this.renderListHeader}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderItemSeparator}
      />
    );
  }
}
