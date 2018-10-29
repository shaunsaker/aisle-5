import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

import styles from './styles';

import PredictedItem from './PredictedItem';
import ItemSeparator from '../ItemSeparator';

export default class PredictedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);

    this.state = {};
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {};

  renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <PredictedItem {...item} />
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
        renderItem={this.renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={(data, index) => ({
          length: this.itemHeight,
          offset: this.itemHeight * index,
          index,
        })}
        bounces={false}
        ItemSeparatorComponent={this.renderItemSeparator}
      />
    );
  }
}
