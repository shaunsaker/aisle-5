import React from 'react';
import PropTypes from 'prop-types';
import Animator from 'react-native-simple-animators';

import utils from '../../../../utils';
import styleConstants from '../../../../styleConstants';
import styles from './styles';

const propTypes = {
  value: PropTypes.number,
};

const defaultProps = {};

const ProgressBar = ({ value }) => {
  const valueAsInt = value / 100;
  const initialWrapperColor = utils.app.getColor(0);
  const wrapperColor = utils.app.getColor(1 - valueAsInt);

  return (
    <Animator
      type="backgroundColor"
      initialValue={initialWrapperColor}
      finalValue={wrapperColor}
      shouldAnimateIn
      duration={1000}
      style={styles.wrapper}
    >
      <Animator
        type="width"
        initialValue="100%"
        finalValue={`${value}%`}
        shouldAnimateIn
        duration={1000}
        easing={styleConstants.easing}
        style={styles.container}
      />
    </Animator>
  );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
