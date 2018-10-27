import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class DeviceInfoHandler extends React.Component {
  constructor(props) {
    super(props);

    this.getUniqueID = this.getUniqueID.bind(this);
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this.getUniqueID();
  }

  getUniqueID() {
    const { dispatch } = this.props;

    dispatch({
      type: 'getUniqueID',
      meta: {
        nextAction: {
          type: 'SET_UNIQUE_ID',
        },
      },
    });
  }

  render() {
    return null;
  }
}

export default connect()(DeviceInfoHandler);
