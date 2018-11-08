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

    this.getTrianglePosition = this.getTrianglePosition.bind(this);

    this.triangleSize = 20;

    this.state = {};
  }

  static propTypes = {
    text: PropTypes.string,
    triangleOrientation: PropTypes.number,
    handlePress: PropTypes.func,
    testID: PropTypes.string,
  };

  static defaultProps = {};

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

    if (orientation === 180) {
      // Special case for bottom oriented triangles
      position.bottom = this.triangleSize / 2;
    }

    return position;
  }

  render() {
    const { text, triangleOrientation, handlePress, testID } = this.props;
    const triangleRotateStyles = { transform: [{ rotate: `${triangleOrientation}deg` }] };
    const trianglePositionStyles = this.getTrianglePosition(triangleOrientation);

    return (
      <Touchable
        onPress={handlePress}
        style={[styles.container, { padding: this.triangleSize }]}
        testID={testID}
      >
        <Snackbar text={text} disabled />

        <View style={[styles.triangleContainer, triangleRotateStyles, trianglePositionStyles]}>
          <Triangle height={this.triangleSize} />
        </View>
      </Touchable>
    );
  }
}
