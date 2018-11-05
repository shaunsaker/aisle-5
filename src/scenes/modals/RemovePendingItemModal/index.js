import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import utils from '../../../utils';
import styles from './styles';

import Lightbox from '../../../components/Lightbox';
import ModalCard from '../../../components/ModalCard';
import Button from '../../../components/Button';

export class RemovePendingItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removePendingListItem = this.removePendingListItem.bind(this);
    this.navigate = this.navigate.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    itemName: PropTypes.string, // passed by previous scene
  };

  static defaultProps = {};

  onCancel() {
    this.navigate(); // pop the scene
  }

  onSubmit() {
    const { itemName } = this.props;

    this.removePendingListItem(itemName);
    this.navigate(); // pop the scene
  }

  removePendingListItem(itemID) {
    const { dispatch } = this.props;

    dispatch({
      type: 'REMOVE_PENDING_LIST_ITEM',
      payload: {
        itemID,
      },
    });
  }

  navigate(page, props) {
    utils.navigation.navigate(page, props);
  }

  render() {
    const { itemName } = this.props;

    return (
      <Lightbox>
        <ModalCard>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Are you sure you want to remove </Text>

            <Text style={styles.titleText}>{itemName}</Text>

            <Text style={styles.text}> from your list?</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button
                text="No"
                handlePress={this.onCancel}
                containerStyle={styles.firstButtonContainer}
                testID="removePendingItemModal.button.cancel"
              />
            </View>

            <View style={styles.buttonSpacer} />

            <View style={styles.buttonContainer}>
              <Button
                text="Yes"
                primary
                handlePress={this.onSubmit}
                testID="removePendingItemModal.button.submit"
              />
            </View>
          </View>
        </ModalCard>
      </Lightbox>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(RemovePendingItemModal);
