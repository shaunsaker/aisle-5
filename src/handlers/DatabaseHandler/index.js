import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class DatabaseHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleSyncData = this.handleSyncData.bind(this);
    this.syncUserCoachmarks = this.syncUserCoachmarks.bind(this);
    this.syncUserItems = this.syncUserItems.bind(this);
    this.syncUserLists = this.syncUserLists.bind(this);
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      authenticated: PropTypes.bool,
      uniqueID: PropTypes.string,
    };
  }

  componentDidMount() {
    const { authenticated } = this.props;

    if (authenticated) {
      this.handleSyncData();
    }
  }

  componentDidUpdate(prevProps) {
    const { authenticated } = this.props;

    if (authenticated && !prevProps.authenticated) {
      this.handleSyncData();
    }
  }

  handleSyncData() {
    this.syncUserCoachmarks();
    this.syncUserItems();
    this.syncUserLists();
  }

  syncUserCoachmarks() {
    const { dispatch, uniqueID } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        pathParts: ['coachmarks'],
        query: ['unique_id', '==', uniqueID],
        nextAction: {
          type: 'SET_USER_COACHMARKS',
        },
      },
    });
  }

  syncUserItems() {
    const { dispatch, uniqueID } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        pathParts: ['items'],
        query: ['unique_id', '==', uniqueID],
        nextAction: {
          type: 'SET_USER_ITEMS',
        },
      },
    });
  }

  syncUserLists() {
    const { dispatch, uniqueID } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        pathParts: ['lists'],
        query: ['unique_id', '==', uniqueID],
        nextAction: {
          type: 'SET_USER_LISTS',
        },
      },
    });
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    uniqueID: state.deviceInfo.uniqueID,
  };
}

export default connect(mapStateToProps)(DatabaseHandler);
