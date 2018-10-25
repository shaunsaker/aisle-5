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
    const { handleToggle, handleSetQuantity } = this.props;

    return (
      <Animator
        type="translateX"
        initialValue={didMount ? styleConstants.dimensions.window.width : 0}
        finalValue={0}
        shouldAnimateIn
        delay={didMount ? 0 : index * 100}
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
