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

    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.hasUserSeenCoachmark = this.hasUserSeenCoachmark.bind(this);
    this.hasUserCheckedPendingListItem = this.hasUserCheckedPendingListItem.bind(this);
    this.onShowCoachmark = this.onShowCoachmark.bind(this);
    this.setTooltipID = this.setTooltipID.bind(this);
    this.onHideCoachmark = this.onHideCoachmark.bind(this);
    this.saveCoachmark = this.saveCoachmark.bind(this);
    this.navigate = this.navigate.bind(this);

    this.keyboardDidShowListener = null;

    this.state = {
      coachmarkID: null,
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
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
  }

  componentDidUpdate(prevProps) {
    const { coachmarkID } = this.state;
    const { scene, pendingList } = this.props;
    const pendingListHasItems = Object.keys(pendingList).length;
    const previousPendingListHasItems = Object.keys(prevProps.pendingList).length;

    // If the user has not seen the addItem coachmark and
    // The user has no pending list items
    // Show the addItem coachmark
    const hasUserSeenAddItemCoachmark = this.hasUserSeenCoachmark('addItem');

    if (!hasUserSeenAddItemCoachmark && !pendingListHasItems) {
      this.onShowCoachmark('addItem');
    }

    // If the user has not seen the checkItem coachmark and
    // The user has just added a pending item
    // Show the checkItem coachmark
    const hasUserSeenCheckItemCoachmark = this.hasUserSeenCoachmark('checkItem');
    const hasUserAddPendingItem = pendingListHasItems && !previousPendingListHasItems;

    if (!hasUserSeenCheckItemCoachmark && hasUserAddPendingItem) {
      this.onShowCoachmark('checkItem');
    }

    // If the checkItem coachmark is shown and
    // The user has marked his pending item as checked
    // Hide the checkItem coachmark
    // Show the checkout coachmark
    const hasUserCheckedPendingListItem =
      pendingListHasItems &&
      previousPendingListHasItems &&
      this.hasUserCheckedPendingListItem(pendingList) &&
      !this.hasUserCheckedPendingListItem(prevProps.pendingList);

    if (coachmarkID === 'checkItem' && hasUserCheckedPendingListItem) {
      this.onHideCoachmark('checkItem');
    }

    // If the user has not seen the checkout coachmark and
    // The user has marked his pending item as checked
    // Show the checkout coachmark
    const hasUserSeenCheckoutCoachmark = this.hasUserSeenCoachmark('checkout');

    if (!hasUserSeenCheckoutCoachmark && hasUserCheckedPendingListItem) {
      this.onShowCoachmark('checkout');
    }

    // If the checkout coachmark is shown and
    // The user has cleared their list
    // Hide the checkout coachmark
    const hasUserClearedPendingList = !pendingListHasItems && previousPendingListHasItems;

    if (coachmarkID === 'checkout' && hasUserClearedPendingList) {
      this.onHideCoachmark('checkout');
    }

    // If the user has not seen the predictions coachmark and
    // The user has cleared their list
    // Show the predictions coachmark
    const hasUserSeenPredictionsCoachmark = this.hasUserSeenCoachmark('predictions');

    if (!hasUserSeenPredictionsCoachmark && hasUserClearedPendingList) {
      this.onShowCoachmark('predictions');
    }

    // If the scene changed, hide the coachmark
    if (coachmarkID && scene !== prevProps.scene) {
      this.onHideCoachmark(coachmarkID);
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }

  keyboardDidShow() {
    const { coachmarkID } = this.state;

    // If the addItem tooltip is shown, hide it
    if (coachmarkID && coachmarkID === 'addItem') {
      this.onHideCoachmark(coachmarkID);
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

  hasUserCheckedPendingListItem(pendingList) {
    const itemID = Object.keys(pendingList)[0];
    const hasUserCheckedPendingListItem = pendingList[itemID].isChecked;

    return hasUserCheckedPendingListItem;
  }

  onShowCoachmark(coachmarkID) {
    const coachmark = COACHMARKS[coachmarkID];

    this.setTooltipID(coachmarkID);

    if (coachmark.type === 'modal') {
      const { titleText } = coachmark;
      const { descriptionText } = coachmark;

      this.navigate('infoModal', { titleText, descriptionText });
    }
  }

  setTooltipID(coachmarkID) {
    this.setState({
      coachmarkID,
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
    const { coachmarkID } = this.state;
    const { children } = this.props;
    const coachmark = COACHMARKS[coachmarkID];

    const tooltipComponent =
      coachmark && coachmark.type === 'tooltip' ? (
        <TooltipAnimator style={[styles.tooltipContainer, coachmark.position]}>
          <Tooltip
            text={coachmark.titleText}
            triangleOrientation={coachmark.triangleOrientation}
            handlePress={() => this.onHideCoachmark(coachmarkID)}
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
