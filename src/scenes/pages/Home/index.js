import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Keyboard } from 'react-native';
import Animator from 'react-native-simple-animators';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import utils from '../../../utils';
import styleConstants from '../../../styleConstants';

import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import Logo from '../../../components/Logo';
import BlankState from '../../../components/BlankState';
import ItemsList from '../../../components/ItemsList';
import TouchableIcon from '../../../components/TouchableIcon';
import InputContainer from '../../../components/InputContainer';
import TextInput from '../../../components/TextInput';
import ItemSuggestionsList from '../../../components/ItemSuggestionsList';
import IconButton from '../../../components/IconButton';
import Button from '../../../components/Button';
import TabBar from '../../../components/TabBar';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.setShowInput = this.setShowInput.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onSetItem = this.onSetItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.onClearItem = this.onClearItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.dismissKeyboard = this.dismissKeyboard.bind(this);
    this.onItemSuggestion = this.onItemSuggestion.bind(this);
    this.onSetPendingListItemIsChecked = this.onSetPendingListItemIsChecked.bind(this);
    this.setPendingListItemIsChecked = this.setPendingListItemIsChecked.bind(this);
    this.onSetPendingListItemQuantity = this.onSetPendingListItemQuantity.bind(this);
    this.setPendingListItemQuantity = this.setPendingListItemQuantity.bind(this);
    this.onRemovePendingListItem = this.onRemovePendingListItem.bind(this);
    this.removePendingListItem = this.removePendingListItem.bind(this);
    this.onSubmitList = this.onSubmitList.bind(this);
    this.saveList = this.saveList.bind(this);
    this.resetPendingList = this.resetPendingList.bind(this);
    this.setSystemMessage = this.setSystemMessage.bind(this);

    this.keyboardDidHideListener = null;

    this.state = {
      showInput: false,
      item: null,
    };
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    uid: PropTypes.string,
    userItems: PropTypes.shape({}),
    pendingList: PropTypes.shape({}),
  };

  static defaultProps = {};

  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  keyboardDidHide() {
    this.hideInput();
  }

  onAddItem() {
    this.setShowInput(true);
    this.focusInput();
  }

  setShowInput(showInput) {
    this.setState({
      showInput,
    });
  }

  onBack() {
    this.hideInput();
  }

  onSetItem(item) {
    this.setItem(item);
  }

  setItem(item) {
    this.setState({
      item,
    });
  }

  onClearItem() {
    this.setItem(null);
  }

  onSubmitItem() {
    this.submitItem();
    this.hideInput();
  }

  submitItem() {
    const { item } = this.state;
    const { userItems } = this.props;

    if (item) {
      const isItemPresentInUserItems =
        userItems &&
        utils.objects.convertObjectToArray(userItems).filter((userItem) => {
          return userItem.name.toLowerCase() === item.toLowerCase();
        }).length;

      if (!isItemPresentInUserItems) {
        // Save it to the db
        this.saveItem(item);
      }

      // Add it to the pending list
      this.addItem(item);
    }
  }

  saveItem(name) {
    const { dispatch, uid } = this.props;
    const document = {
      name,
      uid,
      date_added: Date.now(),
    };

    dispatch({
      type: 'addDocument',
      meta: {
        pathParts: ['items'],
      },
      payload: {
        document,
      },
    });
  }

  addItem(name) {
    const { dispatch } = this.props;
    const item = {
      name,
      quantity: 1,
      isChecked: false,
      dateAdded: Date.now(),
    };

    dispatch({
      type: 'ADD_PENDING_LIST_ITEM',
      payload: {
        item,
      },
    });
  }

  hideInput() {
    this.setShowInput(false);
    this.setItem(null);
    this.dismissKeyboard();
  }

  focusInput() {
    this.input.focus();
  }

  dismissKeyboard() {
    Keyboard.dismiss();
  }

  onItemSuggestion(item) {
    this.setItem(item);
  }

  onSetPendingListItemIsChecked(itemID, isChecked) {
    this.setPendingListItemIsChecked(itemID, isChecked);

    if (isChecked) {
      const datePurchased = Date.now();

      this.setPendingListItemDatePurchased(itemID, datePurchased);
    }
  }

  setPendingListItemIsChecked(itemID, isChecked) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_PENDING_LIST_ITEM_IS_CHECKED',
      payload: {
        itemID,
        isChecked,
      },
    });
  }

  setPendingListItemDatePurchased(itemID, datePurchased) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_PENDING_LIST_ITEM_DATE_PURCHASED',
      payload: {
        itemID,
        datePurchased,
      },
    });
  }

  onSetPendingListItemQuantity(itemID, quantity) {
    this.setPendingListItemQuantity(itemID, quantity);
  }

  setPendingListItemQuantity(itemID, quantity) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_PENDING_LIST_ITEM_QUANTITY',
      payload: {
        itemID,
        quantity,
      },
    });
  }

  onRemovePendingListItem(itemID) {
    this.removePendingListItem(itemID);
  }

  removePendingListItem(itemID) {
    console.log(itemID);
  }

  onSubmitList() {
    const message = 'Items added to Predictions';

    this.saveList();
    this.resetPendingList();
    this.setSystemMessage(message);
  }

  saveList() {
    const { dispatch, uid, pendingList, userItems } = this.props;

    // Convert userItems to array
    const userItemsArray = utils.objects.convertObjectToArray(userItems);

    // Convert pendingList to array
    // Create array of items where item has user_item_id, date_added, date_purchased from isChecked, quantity
    const list = utils.objects.convertObjectToArray(pendingList).map((item) => {
      // Get the user item id
      const userItemID = userItemsArray.filter((userItem) => userItem.name === item.name)[0].id;

      return {
        user_item_id: userItemID,
        quantity: item.quantity,
        date_added: item.dateAdded,
        date_purchased: item.datePurchased,
      };
    });

    const document = {
      list,
      uid,
      date_added: Date.now(),
    };

    dispatch({
      type: 'addDocument',
      meta: {
        pathParts: ['lists'],
      },
      payload: {
        document,
      },
    });
  }

  resetPendingList() {
    const { dispatch } = this.props;

    dispatch({
      type: 'RESET_PENDING_LIST',
    });
  }

  setSystemMessage(message) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message,
      },
    });
  }

  render() {
    const { showInput, item } = this.state;
    const { userItems, pendingList } = this.props;

    // Convert items object to array
    const pendingListArray = pendingList ? utils.objects.convertObjectToArray(pendingList) : [];

    // Convert userItems object to array
    // If item is at least 2 characters long
    // Filter on lower case item name matches
    // But not exact matches
    const itemSuggestionsArray =
      userItems && item && item.length > 1
        ? utils.objects.convertObjectToArray(userItems).filter((userItem) => {
            const isPartialItemPresent =
              userItem.name.toLowerCase().indexOf(item.toLowerCase()) > -1 &&
              userItem.name !== item;

            return isPartialItemPresent;
          })
        : [];

    // Show the submit button if all items in the
    // pendingListArray have isChecked equal to true
    const showSubmitButton = pendingListArray.length
      ? !pendingListArray.filter((pendingListItem) => !pendingListItem.isChecked).length && true
      : null;

    const listComponent = pendingListArray.length ? (
      <ItemsList
        data={pendingListArray}
        handleSetIsChecked={this.onSetPendingListItemIsChecked}
        handleSetQuantity={this.onSetPendingListItemQuantity}
        handleRemoveItem={this.onRemovePendingListItem}
      />
    ) : (
      <Animator
        type="opacity"
        initialValue={1}
        finalValue={0}
        shouldAnimateIn={showInput}
        shouldAnimateOut={!showInput}
        easing={styleConstants.easing}
      >
        <BlankState
          iconName="shopping-basket"
          title="You have no items"
          description="Add items by tapping the '+' button below. They'll show up here."
        />
      </Animator>
    );

    const addItemButtonComponent = !showInput && (
      <Animator
        type="translateY"
        initialValue={100}
        finalValue={0}
        shouldAnimateIn
        delay={100}
        easing={styleConstants.easing}
        style={styles.addItemButtonContainer}
      >
        <Animator
          type="scale"
          initialValue={0.5}
          finalValue={1}
          shouldAnimateIn
          delay={100}
          easing={styleConstants.easing}
        >
          <IconButton name="add" handlePress={this.onAddItem} />
        </Animator>
      </Animator>
    );

    const submitItemButtonComponent = showInput && (
      <Animator
        type="translateY"
        initialValue={100}
        finalValue={0}
        shouldAnimateIn={item ? true : null}
        shouldAnimateOut={!item ? true : null}
        easing={styleConstants.easing}
        style={styles.submitItemButtonContainer}
      >
        <Animator
          type="scale"
          initialValue={0.5}
          finalValue={1}
          shouldAnimateIn={item ? true : null}
          shouldAnimateOut={!item ? true : null}
          easing={styleConstants.easing}
        >
          <IconButton name="check" handlePress={this.onSubmitItem} />
        </Animator>
      </Animator>
    );

    const clearTextButtonComponent = showInput &&
      item && (
        <View style={styles.clearTextButtonContainer}>
          <IconButton name="close" handlePress={this.onClearItem} small secondary />
        </View>
      );

    const itemSuggestionsComponent = showInput &&
      item && (
        <View style={styles.itemSuggestionsListContainer}>
          <ItemSuggestionsList data={itemSuggestionsArray} handlePress={this.onItemSuggestion} />
        </View>
      );

    const submitButtonComponent = !showInput && (
      <Animator
        type="translateY"
        initialValue={100}
        finalValue={0}
        shouldAnimateIn={showSubmitButton}
        shouldAnimateOut={!showSubmitButton}
        easing={styleConstants.easing}
        style={styles.submitButtonContainer}
      >
        <Animator
          type="scale"
          initialValue={0.5}
          finalValue={1}
          shouldAnimateIn={showSubmitButton}
          shouldAnimateOut={!showSubmitButton}
          easing={styleConstants.easing}
        >
          <Animator
            type="opacity"
            initialValue={0}
            finalValue={1}
            shouldAnimateIn={showSubmitButton}
            shouldAnimateOut={!showSubmitButton}
            easing={styleConstants.easing}
          >
            <Button text="Checkout" primary handlePress={this.onSubmitList} />
          </Animator>
        </Animator>
      </Animator>
    );

    return (
      <Page>
        <HeaderBar style={styles.headerBar}>
          <Animator
            type="translateX"
            initialValue={0}
            finalValue={-150}
            shouldAnimateIn={showInput}
            shouldAnimateOut={!showInput}
            easing={styleConstants.easing}
          >
            <Logo />
          </Animator>

          <Animator
            type="translateY"
            initialValue={-60}
            finalValue={0}
            shouldAnimateIn={showInput}
            shouldAnimateOut={!showInput}
            easing={styleConstants.easing}
            style={styles.inputContainer}
          >
            <View style={styles.backButtonContainer}>
              <TouchableIcon iconName="chevron-left" handlePress={this.onBack} />
            </View>

            <TextInput
              placeholder="Enter the item's name..."
              value={item}
              handleChange={this.onSetItem}
              handleSubmit={this.onSubmitItem}
              inputRef={(c) => {
                this.input = c;
              }}
            />

            {clearTextButtonComponent}
          </Animator>
        </HeaderBar>

        <View style={styles.container}>
          <InputContainer contentContainerStyle={styles.contentContainer}>
            {listComponent}
          </InputContainer>

          {itemSuggestionsComponent}

          {submitButtonComponent}

          {addItemButtonComponent}

          {submitItemButtonComponent}
        </View>

        <KeyboardSpacer topSpacing={-55} />

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    uid: state.user.uid,
    userItems: state.userItems,
    pendingList: state.pendingList,
  };
}

export default connect(mapStateToProps)(Home);
