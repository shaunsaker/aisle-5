import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import BlankState from '../../../components/BlankState';
import TabBar from '../../../components/TabBar';

export class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Page>
        <HeaderBar />

        <View style={{ flex: 1 }} />

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Lists);
