import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class DatabaseHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleSyncData = this.handleSyncData.bind(this);
    this.syncUserItems = this.syncUserItems.bind(this);
    this.syncUserLists = this.syncUserLists.bind(this);
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      authenticated: PropTypes.bool,
      uid: PropTypes.string,
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
    this.syncUserItems();
    this.syncUserLists();
  }

  syncUserItems() {
    const { dispatch, uid } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        pathParts: ['items'],
        query: ['uid', '==', uid],
        nextAction: {
          type: 'SET_USER_ITEMS',
        },
      },
    });
  }

  syncUserLists() {
    const { dispatch, uid } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        pathParts: ['lists'],
        query: ['uid', '==', uid],
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
    uid: state.user.uid,
  };
}

export default connect(mapStateToProps)(DatabaseHandler);
