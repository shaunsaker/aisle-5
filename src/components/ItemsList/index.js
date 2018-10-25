import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

import styles from './styles';

import Item from './Item';

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.setDidMount = this.setDidMount.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.maxItemsVisible = Math.ceil((styleConstants.dimensions.window.height - 65 - 50) / 51); // - headerbar - tabbar / item height

    this.state = {
      didMount: false,
    };
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    handleToggle: PropTypes.func,
    handleSetQuantity: PropTypes.number,
  };

  static defaultProps = {};

  componentDidMount() {
    this.setDidMount(true);
  }

  setDidMount(didMount) {
    this.setState({ didMount });
  }

  renderItem({ item, index }) {
    const { didMount } = this.state;
    const { data, handleToggle, handleSetQuantity } = this.props;

    const shouldAnimate = (data.length === 1 || didMount) && index < this.maxItemsVisible;

    return (
      <Animator
        type="translateX"
        initialValue={shouldAnimate ? styleConstants.dimensions.window.width : 0}
        finalValue={0}
        shouldAnimateIn
        style={styles.itemContainer}
      >
        <Item {...item} handleToggle={handleToggle} handleSetQuantity={handleSetQuantity} />
      </Animator>
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
