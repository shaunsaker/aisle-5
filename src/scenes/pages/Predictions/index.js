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
    const predictedItemsList = utils.app.getPredictedItemsList(userLists, userItems);

    // TODO: Test with no data
    const predictedItemsListComponent = predictedItemsList.length ? (
      <PredictedItemsList data={predictedItemsList} />
    ) : (
      <BlankState
        iconName="poll"
        title="You have no predictions"
        description="Use the app and it will start predicting how how much of each item you have left over and when you will run out."
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
