import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import Logo from '../../../components/Logo';
import BlankState from '../../../components/BlankState';
import TextInput from '../../../components/TextInput';
import Label from '../../../components/Label';
import IconButton from '../../../components/IconButton';
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
        <HeaderBar>
          <Logo />
        </HeaderBar>

        <View style={styles.contentContainer}>
          <BlankState
            iconName="shopping-basket"
            title="You have no items"
            description="Add items by tapping the '+' button below. They'll show up here."
          />

          <View style={styles.iconButtonContainer}>
            <IconButton name="add" />
          </View>
        </View>

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
