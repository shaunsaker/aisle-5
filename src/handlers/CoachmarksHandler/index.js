import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import utils from '../../utils';
import styles from './styles';

import TooltipAnimator from './TooltipAnimator';
import Tooltip from '../../components/Tooltip';

import COACHMARKS from './coachmarks';

export class CoachmarksHandler extends React.Component {
  constructor(props) {
    super(props);

    this.hasUserSeenCoachmark = this.hasUserSeenCoachmark.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.onShowCoachmark = this.onShowCoachmark.bind(this);
    this.setTooltipID = this.setTooltipID.bind(this);
    this.onHideCoachmark = this.onHideCoachmark.bind(this);
    this.saveCoachmark = this.saveCoachmark.bind(this);
    this.navigate = this.navigate.bind(this);

    this.keyboardDidShowListener = null;

    this.state = {
      tooltipID: null,
    };
  }

  static propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func.isRequired,
    userCoachmarks: PropTypes.shape({ coachmark_id: PropTypes.string }),
    uid: PropTypes.string,
    uniqueID: PropTypes.string,
    pendingList: PropTypes.shape({}),
    scene: PropTypes.string,
  };

  static defaultProps = {};

  componentDidMount() {
    const coachmarkID = 'addItem';
    const hasUserSeenAddItemCoachmark = this.hasUserSeenCoachmark(coachmarkID);

    if (!hasUserSeenAddItemCoachmark) {
      this.onShowCoachmark(coachmarkID);
    }

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
  }

  componentDidUpdate(prevProps) {
    const { tooltipID } = this.state;
    const { scene } = this.props;

    // If the scene changed, hide the tooltip
    if (tooltipID && scene !== prevProps.scene) {
      this.onHideCoachmark(tooltipID);
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }

  keyboardDidShow() {
    const { tooltipID } = this.state;

    // If the addItem tooltip is shown, hide it
    if (tooltipID && tooltipID === 'addItem') {
      this.onHideCoachmark(tooltipID);
    }
  }

  hasUserSeenCoachmark(coachmarkID) {
    const { userCoachmarks } = this.props;

    // Convert the userCoachmarks object into an array
    const userCoachmarksArray = utils.objects.convertObjectToArray(userCoachmarks);

    // Check if the user has seen the coachmark
    const userHasSeenAddItemCoachmark = userCoachmarksArray.filter(
      (coachmark) => coachmark.coachmark_id === coachmarkID,
    ).length;

    return userHasSeenAddItemCoachmark;
  }

  onShowCoachmark(coachmarkID) {
    const coachmark = COACHMARKS[coachmarkID];

    if (coachmark.type === 'tooltip') {
      this.setTooltipID(coachmarkID);
    } else {
      // Navigate to modal TODO:
    }
  }

  setTooltipID(tooltipID) {
    this.setState({
      tooltipID,
    });
  }

  onHideCoachmark(coachmarkID) {
    this.setTooltipID(null); // reset state
    this.saveCoachmark(coachmarkID);
  }

  saveCoachmark(coachmarkID) {
    const { dispatch, uid, uniqueID } = this.props;
    const document = {
      coachmark_id: coachmarkID,
      uid,
      unique_id: uniqueID,
    };

    dispatch({
      type: 'addDocument',
      meta: {
        pathParts: ['coachmarks'],
      },
      payload: {
        document,
      },
    });
  }

  navigate(page, props) {
    utils.navigation.navigate(page, props);
  }

  render() {
    /*

      TODO: Clear tooltip on navigate
      TODO: Push the coachmarks on depending on triggers, ie.

      pendingList has an item
      pendingList item is checked
      pendingList was cleared
    */

    const { tooltipID } = this.state;
    const { children } = this.props;
    const tooltip = COACHMARKS[tooltipID];

    const tooltipComponent = tooltipID ? (
      <TooltipAnimator style={[styles.tooltipContainer, tooltip.position]}>
        <Tooltip
          text={tooltip.titleText}
          triangleOrientation={tooltip.triangleOrientation}
          handlePress={() => this.onHideCoachmark(tooltipID)}
        />
      </TooltipAnimator>
    ) : null;

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
    uid: state.user.uid,
    uniqueID: state.deviceInfo.uniqueID,
    pendingList: state.pendingList,
    scene: state.navigation.scene,
  };
}

export default connect(mapStateToProps)(CoachmarksHandler);
