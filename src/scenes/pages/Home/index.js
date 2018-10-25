import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Keyboard } from 'react-native';
import Animator from 'react-native-simple-animators';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import styleConstants from '../../../styleConstants';

import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import Logo from '../../../components/Logo';
import InputContainer from '../../../components/InputContainer';
import BlankState from '../../../components/BlankState';
import TouchableIcon from '../../../components/TouchableIcon';
import TextInput from '../../../components/TextInput';
import Label from '../../../components/Label';
import IconButton from '../../../components/IconButton';
import Button from '../../../components/Button';
import TabBar from '../../../components/TabBar';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onAddItem = this.onAddItem.bind(this);
    this.setShowInput = this.setShowInput.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onSetItem = this.onSetItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.onClearItem = this.onClearItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.saveItemToStore = this.saveItemToStore.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.dismissKeyboard = this.dismissKeyboard.bind(this);

    this.state = {
      showInput: false,
      item: null,
    };
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    uid: PropTypes.string,
    items: PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      date_added: PropTypes.instanceOf(Date),
    }),
  };

  static defaultProps = {};

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
    const { item } = this.state;

    this.saveItemToStore(item);
    this.hideInput();
  }

  saveItemToStore(name) {
    const { dispatch } = this.props;
    const item = {
      name,
      quantity: 0,
      date_added: Date.now(),
    };

    dispatch({
      type: 'ADD_ITEM',
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

  render() {
    const { showInput, item } = this.state;
    const { items } = this.props;

    console.log(items);

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

        <InputContainer contentContainerStyle={styles.contentContainer}>
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

          {addItemButtonComponent}
        </InputContainer>

        {submitItemButtonComponent}

        <KeyboardSpacer topSpacing={-55} />

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    uid: state.user.uid,
    items: state.items,
  };
}

export default connect(mapStateToProps)(Home);
