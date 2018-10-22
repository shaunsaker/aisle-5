import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import BlankState from '../../../components/BlankState';
import TextInput from '../../../components/TextInput';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import TabBar from '../../../components/TabBar';

export class Home extends React.Component {
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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
