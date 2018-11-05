import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import utils from '../../../utils';
import styles from './styles';

import Lightbox from '../../../components/Lightbox';
import ModalCard from '../../../components/ModalCard';
import Button from '../../../components/Button';

export class InfoModal extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.navigate = this.navigate.bind(this);

    this.state = {};
  }

  static propTypes = {
    /* passed by previous scene */
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
  };

  static defaultProps = {};

  onClose() {
    this.navigate(); // pop the scene
  }

  navigate(page, props) {
    utils.navigation.navigate(page, props);
  }

  render() {
    const { titleText, descriptionText } = this.props;

    return (
      <Lightbox>
        <ModalCard>
          <Text style={styles.titleText}>{titleText}</Text>

          <Text style={styles.descriptionText}>{descriptionText}</Text>

          <View style={styles.buttonContainer}>
            <Button
              text="Nice"
              primary
              handlePress={this.onClose}
              testID="infoModal.button.submit"
            />
          </View>
        </ModalCard>
      </Lightbox>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(InfoModal);
