import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styleConstants from '../../styleConstants';

export class SystemMessageHandler extends React.Component {
  constructor(props) {
    super(props);

    this.showSnackbar = this.showSnackbar.bind(this);
    this.resetError = this.resetError.bind(this);

    this.snackbarDuration = 4000;
  }

  static propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.node.isRequired,
    systemMessage: PropTypes.string,
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { systemMessage } = this.props;

    if (systemMessage && (!prevProps.systemMessage || systemMessage !== prevProps.systemMessage)) {
      this.showSnackbar();

      setTimeout(() => {
        this.resetError();
      }, this.snackbarDuration);
    }
  }

  showSnackbar() {
    const { systemMessage } = this.props;
  }

  resetError() {
    const { dispatch } = this.props;

    dispatch({
      type: 'RESET_SYSTEM_MESSAGE',
    });
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

function mapStateToProps(state) {
  return {
    systemMessage: state.appState.systemMessage,
  };
}

export default connect(mapStateToProps)(SystemMessageHandler);
