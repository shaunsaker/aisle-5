import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Text } from 'react-native';

import styleConstants from '../../styleConstants';
import styles from './styles';

/*
  This container's responsibility is to:

  - display loading state based on pendingTransactions
*/
export class NetworkActivityIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    network: PropTypes.shape({
      type: PropTypes.string,
    }).isRequired,
    pendingTransactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {};

  render() {
    const { network, pendingTransactions } = this.props;
    const isOffline = network.type === 'none';
    const isSynced = !pendingTransactions.length;
    const isLoading = !isOffline && !isSynced;

    const offlineComponent = isOffline ? <Text style={styles.text}>Offline</Text> : null;

    const syncedComponent = isLoading ? (
      <View style={styles.row}>
        <ActivityIndicator size="small" color={styleConstants.colors.white} style={styles.loader} />
      </View>
    ) : null;

    return (
      <View style={styles.container}>
        {offlineComponent}

        {syncedComponent}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    network: state.appState.network,
    pendingTransactions: state.appState.pendingTransactions,
  };
}

export default connect(mapStateToProps)(NetworkActivityIndicator);
