import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import utils from '../../../utils';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import BlankState from '../../../components/BlankState';
import TabBar from '../../../components/TabBar';

export class Predictions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userLists: PropTypes.shape({}),
    userItems: PropTypes.shape({}),
  };

  static defaultProps = {};

  render() {
    const { userLists, userItems } = this.props;
    const predictionsList = utils.app.getPredictionsList(userLists, userItems);

    return (
      <Page>
        <HeaderBar>
          <TitleText text="Predictions" />
        </HeaderBar>
        <View style={{ flex: 1 }}>
          {predictionsList.map((prediction) => {
            return (
              <View key={prediction.id}>
                <Text>{prediction.name}</Text>
                <Text>{prediction.averageUsagePerDay}</Text>
                <Text>{prediction.daysLeftUntilZeroQuantity}</Text>
                <Text>{prediction.remainingQuantityPercentage}</Text>
              </View>
            );
          })}
        </View>

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
