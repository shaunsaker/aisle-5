import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, View } from 'react-native';

import styles from './styles';

import LinkText from '../LinkText';
import ShoppingItem from '../ShoppingItem';
import ItemSeparator from '../ItemSeparator';

export default class ListOfLists extends React.Component {
  constructor(props) {
    super(props);

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);

    this.itemHeight = 51;

    this.state = {};
  }

  static propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.shape({})),
      }),
    ).isRequired,
  };

  static defaultProps = {};

  renderSectionHeader({ section }) {
    return (
      <View style={styles.headerWrapper}>
        <View style={[styles.headerContainer, { height: this.itemHeight }]}>
          <LinkText text={section.title} disabled />
        </View>

        <ItemSeparator />
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemContainer}>
          <ShoppingItem name={item.name} quantity={item.quantity} height={this.itemHeight} />
        </View>

        <ItemSeparator />
      </View>
    );
  }

  renderItemSeparator() {
    return <ItemSeparator />;
  }

  render() {
    const { sections } = this.props;

    return (
      <SectionList
        ref={(c) => {
          this.flatList = c;
        }}
        keyExtractor={({ id }) => id}
        sections={sections}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        stickySectionHeadersEnabled
      />
    );
  }
}
