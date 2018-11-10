import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export class NetworkActivityIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    hasNetwork: PropTypes.bool,
  };

  static defaultProps = {};

  render() {
    const { hasNetwork } = this.props;

    const iconComponent = !hasNetwork ? (
      <Icon name="signal-cellular-off" style={styles.icon} />
    ) : null;

    return <View style={styles.container}>{iconComponent}</View>;
  }
}

function mapStateToProps(state) {
  return {
    hasNetwork: state.appState.hasNetwork,
  };
}

export default connect(mapStateToProps)(NetworkActivityIndicator);
