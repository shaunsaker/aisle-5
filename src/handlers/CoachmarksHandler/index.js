import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Animator from 'react-native-simple-animators';

import styles from './styles';

import COACHMARKS from './coachmarks';

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
    /*

      TODO: Push the coachmarks on depending on triggers, ie.
      const tooltips = [];

      componentDidMount
      pendingList has an item
      pendingList item is checked
      pendingList was cleared
    */

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
