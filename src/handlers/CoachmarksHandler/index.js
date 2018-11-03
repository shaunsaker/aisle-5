import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Animator from 'react-native-simple-animators';

import styles from './styles';

export class CoachmarksHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {};

  render() {
    const { children } = this.props;
    const tooltipComponent = null;

    return (
      <Fragment>
        {children}

        {tooltipComponent}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    userCoachmarks: state.userCoachmarks,
  };
}

export default connect(mapStateToProps)(CoachmarksHandler);
