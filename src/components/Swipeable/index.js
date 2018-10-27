import React from 'react';
import PropTypes from 'prop-types';
import { View, PanResponder, Animated } from 'react-native';

import styleConstants from '../../styleConstants';

import styles from './styles';

export default class Swipeable extends React.Component {
  constructor(props) {
    super(props);

    this.gestureThreshold = 35;
    this.gestureDelay = this.gestureThreshold * -1;
    this.snapStartDuration = 150;
    this.snapEndDuration = 300; // when item is removed

    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  static get propTypes() {
    return {
      width: PropTypes.number,
      onSwipeStart: PropTypes.func,
      onSwipeEnd: PropTypes.func,
      onSwiped: PropTypes.func,
      children: PropTypes.node,
    };
  }

  componentWillMount() {
    const { pan } = this.state;
    const { width, onSwipeStart, onSwipeEnd, onSwiped } = this.props;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,

      onMoveShouldSetPanResponder: () => true,

      onPanResponderTerminationRequest: () => false,

      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dx > this.gestureThreshold) {
          const newX = gestureState.dx + this.gestureDelay;

          pan.setValue({ x: newX, y: 0 });

          if (onSwipeStart) {
            onSwipeStart();
          }
        }
      },

      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx < width / 2) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: this.snapStartDuration,
            easing: styleConstants.easing,
          }).start(() => {
            if (onSwipeEnd) {
              onSwipeEnd();
            }
          });
        } else {
          Animated.timing(pan, {
            toValue: { x: width, y: 0 },
            duration: this.snapEndDuration,
            easing: styleConstants.easing,
          }).start(() => {
            if (onSwipeEnd) {
              onSwipeEnd();
            }

            if (onSwiped) {
              onSwiped();
            }
          });
        }
      },
    });
  }

  render() {
    const { pan } = this.state;
    const { width, children } = this.props;
    const color = pan.x.interpolate({
      inputRange: [0, width],
      outputRange: ['rgba(255, 0, 0, 0)', 'rgba(255, 0, 0, 1)'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[pan.getLayout(), { backgroundColor: color }]}
        >
          {children}
        </Animated.View>
      </View>
    );
  }
}
