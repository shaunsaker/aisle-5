import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNetworkConnectivity } from 'react-native-offline';

export class NetworkHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleConnectionChange = this.handleConnectionChange.bind(this);
    this.setHasNetwork = this.setHasNetwork.bind(this);
    this.disableNetwork = this.disableNetwork.bind(this);
    this.enableNetwork = this.enableNetwork.bind(this);
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      isConnected: PropTypes.bool,
      hasNetwork: PropTypes.bool,
    };
  }

  componentDidMount() {
    const { isConnected } = this.props;

    this.handleConnectionChange(isConnected);
  }

  componentDidUpdate() {
    const { isConnected, hasNetwork } = this.props;

    // If network connectivity has changed
    if (isConnected !== hasNetwork) {
      this.handleConnectionChange(isConnected);
    }
  }

  handleConnectionChange(isConnected) {
    this.setHasNetwork(isConnected);

    if (isConnected) {
      this.enableNetwork();
    } else {
      this.disableNetwork();
    }
  }

  setHasNetwork(hasNetwork) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_HAS_NETWORK',
      payload: {
        hasNetwork,
      },
    });
  }

  disableNetwork() {
    const { dispatch } = this.props;

    dispatch({
      type: 'disableNetwork',
    });
  }

  enableNetwork() {
    const { dispatch } = this.props;

    dispatch({
      type: 'enableNetwork',
    });
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    hasNetwork: state.appState.hasNetwork,
  };
}

const config = {
  checkConnectionInterval: 5000, // every 5 seconds
  checkInBackground: true,
};

export default connect(mapStateToProps)(withNetworkConnectivity(config)(NetworkHandler));
