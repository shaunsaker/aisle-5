import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import utils from '../../../utils';
import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import BlankState from '../../../components/BlankState';
import PredictedItemsList from '../../../components/PredictedItemsList';
import TabBar from '../../../components/TabBar';

export class Predictions extends React.Component {
  constructor(props) {
    super(props);

    this.onSortByFieldName = this.onSortByFieldName.bind(this);
    this.setSortByKey = this.setSortByKey.bind(this);
    this.toggleReverseSort = this.toggleReverseSort.bind(this);

    this.state = {
      sortByKey: null,
      reverseSort: false,
    };
  }

  static propTypes = {
    userLists: PropTypes.shape({}),
    userItems: PropTypes.shape({}),
  };

  static defaultProps = {};

  onSortByFieldName(fieldName) {
    const { sortByKey } = this.state;

    this.setSortByKey(fieldName);

    if (sortByKey === fieldName) {
      // If the sort by key is the same,
      // toggle reverse sort
      this.toggleReverseSort();
    }
  }

  setSortByKey(sortByKey) {
    this.setState({
      sortByKey,
    });
  }

  toggleReverseSort() {
    const { reverseSort } = this.state;

    this.setState({
      reverseSort: !reverseSort,
    });
  }

  render() {
    const { sortByKey, reverseSort } = this.state;
    const { userLists, userItems } = this.props;
    let predictedItemsList = utils.app.getPredictedItemsList(userLists, userItems);

    if (sortByKey) {
      // Sort the array of predicted items by the key provided
      // If present
      // Reverse it as needed
      predictedItemsList = utils.arrays.sortArrayOfObjectsByKey(
        predictedItemsList,
        sortByKey,
        reverseSort,
      );
    }

    const predictedItemsListComponent = predictedItemsList.length ? (
      <PredictedItemsList
        data={predictedItemsList}
        handleHeaderItemPress={this.onSortByFieldName}
        headerTestIDPrefix="predictions.predictedItemsList.header.button."
      />
    ) : (
      <BlankState
        iconName="poll"
        title="Wingardium Leviosa!"
        description="Use the app and it will magically predict when you'll run out of items."
      />
    );

    return (
      <Page>
        <HeaderBar>
          <TitleText text="Predictions" />
        </HeaderBar>

        <View style={styles.container}>{predictedItemsListComponent}</View>

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLists: state.userLists,
    userItems: state.userItems,
  };
}

export default connect(mapStateToProps)(Predictions);
