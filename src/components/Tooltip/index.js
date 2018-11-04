import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

import Touchable from '../Touchable';
import Snackbar from '../Snackbar';
import Triangle from './Triangle';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.getContainerStyles = this.getContainerStyles.bind(this);
    this.getTrianglePosition = this.getTrianglePosition.bind(this);

    this.triangleSize = 20;

    this.state = {};
  }

  static propTypes = {
    text: PropTypes.string,
    triangleOrientation: PropTypes.number,
    handlePress: PropTypes.func,
  };

  static defaultProps = {};

  getContainerStyles(orientation) {
    let padding;

    if (orientation === 90 || orientation === 270) {
      padding = this.triangleSize;
    } else {
      padding = this.triangleSize / 2;
    }

    const containerStyles = {
      padding,
      margin: padding * -1, // remove the padding we added
    };

    return containerStyles;
  }

  getTrianglePosition(orientation) {
    const position = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
    const removePositions = {
      0: 'bottom',
      90: 'left',
      180: 'top',
      270: 'right',
    };
    const positionToRemove = removePositions[orientation];

    if (positionToRemove) {
      // NOTE: This is mutating
      delete position[positionToRemove];
    }

    return position;
  }

  render() {
    const { text, triangleOrientation, handlePress } = this.props;
    const containerStyles = this.getContainerStyles(triangleOrientation);
    const triangleRotateStyles = { transform: [{ rotate: `${triangleOrientation}deg` }] };
    const trianglePositionStyles = this.getTrianglePosition(triangleOrientation);

    return (
      <Touchable onPress={handlePress} style={[styles.container, containerStyles]}>
        <Snackbar text={text} disabled />

        <View style={[styles.triangleContainer, triangleRotateStyles, trianglePositionStyles]}>
          <Triangle height={this.triangleSize} />
        </View>
      </Touchable>
    );
  }
}
