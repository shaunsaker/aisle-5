import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

import styles from './styles';

import InputContainer from '../InputContainer';

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);

    this.onBack = this.onBack.bind(this);

    this.state = {
      shouldAnimateOut: false,
    };
  }

  static propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
  };

  static defaultProps = {};

  onBack() {
    const { handleClose } = this.props;

    if (handleClose) {
      handleClose();
    } else {
      Actions.pop();
    }
  }

  render() {
    const { shouldAnimateOut } = this.state;
    const { children } = this.props;

    return (
      <Animator
        type="translateY"
        initialValue={styleConstants.dimensions.window.height}
        finalValue={0}
        shouldAnimateIn
        shouldAnimateOut={shouldAnimateOut}
        animateOutCallback={this.onBack}
        style={styles.wrapper}
      >
        <InputContainer
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {children}
        </InputContainer>
      </Animator>
    );
  }
}
