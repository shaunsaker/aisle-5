import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

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
        <ScrollView style={styles.container}>
          <BlankState iconName="error-outline" title="Something went wrong" description={message} />
        </ScrollView>
      </Page>
    );
  }
}

export default connect()(Error);
