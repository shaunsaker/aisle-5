import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Animator from 'react-native-simple-animators';

import utils from '../../utils';
import styles from './styles';

import Tooltip from '../../components/Tooltip';

import COACHMARKS from './coachmarks';

export class CoachmarksHandler extends React.Component {
  constructor(props) {
    super(props);

    this.hasUserSeenCoachmark = this.hasUserSeenCoachmark.bind(this);
    this.onShowCoachmark = this.onShowCoachmark.bind(this);
    this.setTooltipID = this.setTooltipID.bind(this);
    this.saveCoachmark = this.saveCoachmark.bind(this);
    this.navigate = this.navigate.bind(this);

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
  };

  static defaultProps = {};

  componentDidMount() {
    const coachmarkID = 'addItem';
    const hasUserSeenAddItemCoachmark = this.hasUserSeenCoachmark(coachmarkID);

    if (!hasUserSeenAddItemCoachmark) {
      this.onShowCoachmark(coachmarkID);
    }
  }

  hasUserSeenCoachmark(coachmarkID) {
    const { userCoachmarks } = this.props;

    // Convert the userCoachmarks object into an array
    const userCoachmarksArray = utils.objects.convertObjectToArray(userCoachmarks);

    // Check if the user has seen the coachmark
    const userHasSeenAddItemCoachmark = userCoachmarksArray.filter(
      (coachmark) => coachmark.id === coachmarkID,
    ).length;

    return userHasSeenAddItemCoachmark;
  }

  onShowCoachmark(coachmarkID) {
    const coachmark = COACHMARKS[coachmarkID];

    // this.saveCoachmark(coachmarkID); // TODO:

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

      TODO: Push the coachmarks on depending on triggers, ie.

      pendingList has an item
      pendingList item is checked
      pendingList was cleared
    */

    const { tooltipID } = this.state;
    const { children } = this.props;
    const tooltip = COACHMARKS[tooltipID];

    const tooltipComponent = tooltipID ? (
      <View style={[styles.tooltipContainer, tooltip.position]}>
        <Tooltip text={tooltip.titleText} triangleOrientation={tooltip.triangleOrientation} />
      </View>
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
  };
}

export default connect(mapStateToProps)(CoachmarksHandler);
