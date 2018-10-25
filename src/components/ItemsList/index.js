import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import styles from './styles';

import Item from './Item';

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    handleToggle: PropTypes.func,
    handleSetQuantity: PropTypes.number,
  };

  static defaultProps = {};

  renderItem({ item }) {
    const { handleToggle, handleSetQuantity } = this.props;

    return (
      <View style={styles.itemContainer}>
        <Item {...item} handleToggle={handleToggle} handleSetQuantity={handleSetQuantity} />
      </View>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <FlatList
        keyExtractor={({ id }) => id}
        data={data}
        renderItem={this.renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
    );
  }
}
