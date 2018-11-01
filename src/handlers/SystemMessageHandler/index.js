import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Animator from 'react-native-simple-animators';

import styles from './styles';

import Snackbar from '../../components/Snackbar';

export class SystemMessageHandler extends React.Component {
  constructor(props) {
    super(props);

    this.setHideSnackbar = this.setHideSnackbar.bind(this);
    this.resetSystemMessage = this.resetSystemMessage.bind(this);

    this.snackbarDuration = 2750;

    this.state = {
      hideSnackbar: false,
    };
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
      setTimeout(() => {
        this.setHideSnackbar(true);

        setTimeout(() => {
          this.resetSystemMessage();
        }, 500);
      }, this.snackbarDuration);
    }
  }

  setHideSnackbar(hideSnackbar) {
    this.setState({
      hideSnackbar,
    });
  }

  resetSystemMessage() {
    const { dispatch } = this.props;

    dispatch({
      type: 'RESET_SYSTEM_MESSAGE',
    });
  }

  render() {
    const { hideSnackbar } = this.state;
    const { children, systemMessage } = this.props;

    const snackbarComponent = systemMessage && (
      <Animator
        type="translateY"
        initialValue={-200}
        finalValue={0}
        shouldAnimateIn
        shouldAnimateOut={hideSnackbar}
        style={styles.snackbarContainer}
      >
        <Animator
          type="scale"
          initialValue={0}
          finalValue={1}
          shouldAnimateIn
          shouldAnimateOut={hideSnackbar}
        >
          <Snackbar text={systemMessage} />
        </Animator>
      </Animator>
    );

    return (
      <Fragment>
        {children}

        {snackbarComponent}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    systemMessage: state.appState.systemMessage,
  };
}

export default connect(mapStateToProps)(SystemMessageHandler);
