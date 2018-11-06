import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import utils from '../../../utils';
import config from '../../../config';
import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import BlankState from '../../../components/BlankState';
import HeaderTabs from '../../../components/HeaderTabs';
import ShoppingItemsList from '../../../components/ShoppingItemsList';
import TabBar from '../../../components/TabBar';

import TABS from './tabs';

export class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.onTabPress = this.onTabPress.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);

    this.state = {
      activeTab: TABS[0],
    };
  }

  static propTypes = {
    userLists: PropTypes.shape({}),
    userItems: PropTypes.shape({}),
  };

  static defaultProps = {};

  onTabPress(tab) {
    this.setActiveTab(tab);
  }

  setActiveTab(activeTab) {
    this.setState({
      activeTab,
    });
  }

  render() {
    const { activeTab } = this.state;
    const { userLists, userItems } = this.props;

    // Get the predicted items list
    const predictedItemsList = utils.app.getPredictedItemsList(userLists, userItems);

    // Filter items that have enough data
    const filteredPredictedItemsList = predictedItemsList.filter(
      (item) => item.averageUsagePerDay !== null,
    );

    // Get the shopping list
    const shoppingList = filteredPredictedItemsList.map((item) => {
      // Calculate the quantity needed relative to the time
      const relativeQuantity = item.averageUsagePerDay * activeTab.timeInDays;

      return {
        id: item.id,
        name: item.name,
        quantity: relativeQuantity,
      };
    });

    const shoppingListComponent = filteredPredictedItemsList.length ? (
      <Fragment>
        <View style={styles.headerTabsContainer}>
          <HeaderTabs
            tabs={TABS}
            activeTab={activeTab}
            handleTabPress={this.onTabPress}
            headerTestIDPrefix="lists.headerTabs.button."
          />
        </View>

        <ShoppingItemsList data={shoppingList} />
      </Fragment>
    ) : (
      <BlankState
        iconName="assignment"
        title={config.copy.blankStates.lists.title}
        description={config.copy.blankStates.lists.description}
      />
    );

    return (
      <Page>
        <HeaderBar>
          <TitleText text="Lists" />
        </HeaderBar>

        <View style={styles.container}>{shoppingListComponent}</View>

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

export default connect(mapStateToProps)(Lists);
