import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

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
    hasNetwork: PropTypes.bool,
    pendingTransactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {};

  render() {
    const { hasNetwork, pendingTransactions } = this.props;
    const isSynced = !pendingTransactions.length;
    const isLoading = hasNetwork && !isSynced;

    const loaderComponent = isLoading ? (
      <ActivityIndicator size="small" color={styleConstants.colors.white} style={styles.loader} />
    ) : null;

    return <View style={styles.container}>{loaderComponent}</View>;
  }
}

function mapStateToProps(state) {
  return {
    hasNetwork: state.appState.hasNetwork,
    pendingTransactions: state.appState.pendingTransactions,
  };
}

export default connect(mapStateToProps)(NetworkActivityIndicator);
