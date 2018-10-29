import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

import styles from './styles';

import ShoppingItem from './ShoppingItem';
import ItemSeparator from '../ItemSeparator';

export default class ShoppingItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);

    this.itemHeight = 51;

    this.state = {};
  }

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {};

  renderItem({ item }) {
    // If the quantity is less than 1, round to the nearest digit
    // Else just round it
    const quantity =
      item.quantity < 1 ? Number(item.quantity.toFixed(1)) : Math.round(item.quantity);

    return (
      <View style={styles.itemContainer}>
        <ShoppingItem name={item.name} quantity={quantity} height={this.itemHeight} />
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
