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

    this.state = {};
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
    const { children } = this.props;

    return (
      <Animator
        type="opacity"
        initialValue={0}
        finalValue={1}
        shouldAnimateIn
        style={styles.outerWrapper}
      >
        <Animator
          type="translateY"
          initialValue={styleConstants.dimensions.window.height}
          finalValue={0}
          shouldAnimateIn
          style={styles.wrapper}
        >
          <InputContainer
            containerStyle={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            {children}
          </InputContainer>
        </Animator>
      </Animator>
    );
  }
}
