import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

import styles from './styles';

import Swipeable from '../Swipeable';
import Item from './Item';

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToEnd = this.scrollToEnd.bind(this);
    this.setDidChange = this.setDidChange.bind(this);
    this.onSwipeStart = this.onSwipeStart.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.itemWidth = styleConstants.dimensions.window.width;
    this.itemHeight = 51;
    this.maxItemsVisible = Math.ceil(
      (styleConstants.dimensions.window.height - 65 - 50) / this.itemHeight,
    ); // - headerbar - tabbar

    this.state = {
      didChange: false,
      scrollEnabled: true,
    };
  }

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        isChecked: PropTypes.bool,
      }),
    ),
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

  onSwipeStart() {
    this.setScrollEnabled(false);
  }

  onSwipeEnd() {
    this.setScrollEnabled(true);
  }

  setScrollEnabled(scrollEnabled) {
    this.setState({
      scrollEnabled,
    });
  }

  renderItem({ item, index }) {
    const { didChange } = this.state;
    const { handleSetIsChecked, handleSetQuantity, handleRemoveItem } = this.props;

    const shouldAnimate = didChange && index < this.maxItemsVisible;

    return (
      <Swipeable
        width={this.itemWidth}
        onSwipeStart={this.onSwipeStart}
        onSwipeEnd={this.onSwipeEnd}
        onSwiped={() => handleRemoveItem(item.id)}
      >
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
      </Swipeable>
    );
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
      />
    );
  }
}
