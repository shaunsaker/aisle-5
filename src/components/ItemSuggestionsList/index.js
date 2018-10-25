import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

import styles from './styles';

import Label from '../Label';

export default class ItemSuggestionsList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    handlePress: PropTypes.func,
  };

  static defaultProps = {};

  renderItem({ item, index }) {
    const { handlePress } = this.props;

    return (
      <Animator
        type="translateY"
        initialValue={32 + styleConstants.dimensions.spacing.vertical}
        finalValue={0}
        shouldAnimateIn
        delay={index * 100}
        style={styles.itemContainer}
      >
        <Animator
          type="scale"
          initialValue={0.5}
          finalValue={1}
          shouldAnimateIn
          delay={index * 100}
        >
          <Label text={item.name} handlePress={() => handlePress(item.name)} />
        </Animator>
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
        horizontal
      />
    );
  }
}
