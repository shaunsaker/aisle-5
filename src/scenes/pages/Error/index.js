import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import styles from './styles';

import Page from '../../../components/Page';
import BlankState from '../../../components/BlankState';

export class Error extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    message: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { message } = this.props;

    return (
      <Page>
        <View style={styles.container}>
          <BlankState iconName="error-outline" title="Something went wrong" description={message} />
        </View>
      </Page>
    );
  }
}

export default connect()(Error);
