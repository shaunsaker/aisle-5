import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../../styleConstants';

const propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const TooltipAnimator = ({ children, style }) => {
  return (
    <Animator
      type="opacity"
      initialValue={0}
      finalValue={1}
      delay={500}
      shouldAnimateIn
      easing={styleConstants.easing}
      style={style}
    >
      <Animator
        type="scale"
        initialValue={0}
        finalValue={1}
        shouldAnimateIn
        delay={500}
        easing={styleConstants.easing}
      >
        <Animator
          type="scale"
          initialValue={1}
          finalValue={1.05}
          shouldAnimateIn
          shouldRepeat
          duration={600}
          easing={styleConstants.easing}
        >
          {children}
        </Animator>
      </Animator>
    </Animator>
  );
};

TooltipAnimator.propTypes = propTypes;
TooltipAnimator.defaultProps = defaultProps;

export default TooltipAnimator;
