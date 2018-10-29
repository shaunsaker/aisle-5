import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

import styles from './styles';

import Item from './Item';
import ItemSeparator from '../ItemSeparator';

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToEnd = this.scrollToEnd.bind(this);
    this.setDidChange = this.setDidChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);

    this.itemWidth = styleConstants.dimensions.window.width;
    this.itemHeight = 51;
    this.maxItemsVisible = Math.ceil(
      (styleConstants.dimensions.window.height - 65 - 50) / this.itemHeight,
    ); // - headerbar - tabbar

    this.state = {
      didChange: false,
    };
  }

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        isChecked: PropTypes.bool,
      }),
    ).isRequired,
    handleSetIsChecked: PropTypes.func,
    handleSetQuantity: PropTypes.func,
    handleRemoveItem: PropTypes.func,
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (data.length !== prevProps.data.length) {
      // We only want to animate new list items in
      this.setDidChange(true);
      this.scrollToEnd();
    }
  }

  scrollToEnd() {
    this.flatList.scrollToEnd();
  }

  setDidChange(didChange) {
    this.setState({ didChange });
  }

  renderItem({ item, index }) {
    const { didChange } = this.state;
    const { handleSetIsChecked, handleSetQuantity, handleRemoveItem } = this.props;

    const shouldAnimate = didChange && index < this.maxItemsVisible;

    return (
      <Animator
        type="translateX"
        initialValue={shouldAnimate ? styleConstants.dimensions.window.width : 0}
        finalValue={0}
        shouldAnimateIn
        style={styles.itemContainer}
      >
        <Item
          {...item}
          handleSetIsChecked={() => handleSetIsChecked(item.id, !item.isChecked)}
          handleSetQuantity={(quantity) => handleSetQuantity(item.id, quantity)}
        />
      </Animator>
    );
  }

  renderItemSeparator() {
    return <ItemSeparator />;
  }

  render() {
    const { scrollEnabled } = this.state;
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
        scrollEnabled={scrollEnabled}
        bounces={false}
        ItemSeparatorComponent={this.renderItemSeparator}
      />
    );
  }
}
