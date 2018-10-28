import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import utils from '../../../utils';
import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import HeadingText from '../../../components/HeadingText';
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

        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.headerText}>NAME</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>USAGE PER DAY</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>DAYS LEFT</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>LEVEL (%)</Text>
            </View>
          </View>

          {predictionsList.map((prediction) => {
            const predictionIsReady =
              prediction.averageUsagePerDay || prediction.averageUsagePerDay === 0;

            const dataComponent = predictionIsReady ? (
              <Fragment>
                <View style={styles.column}>
                  <Text style={styles.text}>{Math.round(prediction.averageUsagePerDay)}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {Math.floor(prediction.daysLeftUntilZeroQuantity)}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {Math.floor(prediction.remainingQuantityPercentage)}
                  </Text>
                </View>
              </Fragment>
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.text}>Not enough data</Text>
              </View>
            );

            return (
              <View key={prediction.id} style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.text}>{prediction.name}</Text>
                </View>

                {dataComponent}
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
