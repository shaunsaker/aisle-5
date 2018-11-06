import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import utils from '../../../utils';
import config from '../../../config';
import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import BlankState from '../../../components/BlankState';
import ListOfLists from '../../../components/ListOfLists';
import TabBar from '../../../components/TabBar';

export class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    userLists: PropTypes.shape({}),
    userItems: PropTypes.shape({}),
  };

  static defaultProps = {};

  render() {
    const { userLists, userItems } = this.props;

    // Convert userLists to array
    const userListsArray = utils.objects.convertObjectToArray(userLists);

    // Sort by date_added
    const sortedUserListsArray = utils.arrays.sortArrayOfObjectsByKey(
      userListsArray,
      'date_added',
      true,
    );

    // Process the data into sections
    const userListSections = sortedUserListsArray.map((userList) => {
      const time = utils.time.getTime(userList.date_added);
      const date = utils.time.getPrettyDate(userList.date_added, true, true);
      const title = `${date}, ${time}`;
      const data = userList.list.map((item) => {
        const { name } = userItems[item.user_item_id];

        return {
          name,
          quantity: item.quantity,
          id: item.user_item_id,
        };
      });

      return {
        title,
        data,
      };
    });

    const listComponent = userListSections.length ? (
      <ListOfLists sections={userListSections} />
    ) : (
      <BlankState
        iconName="watch-later"
        title={config.copy.blankStates.history.title}
        description={config.copy.blankStates.history.description}
      />
    );

    return (
      <Page>
        <HeaderBar>
          <TitleText text="History" />
        </HeaderBar>

        <View style={styles.container}>{listComponent}</View>

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

export default connect(mapStateToProps)(History);
