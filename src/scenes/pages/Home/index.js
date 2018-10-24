import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../../styleConstants';

import styles from './styles';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import Logo from '../../../components/Logo';
import InputContainer from '../../../components/InputContainer';
import BlankState from '../../../components/BlankState';
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
    this.onSetItem = this.onSetItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);

    this.state = {
      showInput: false,
      item: null,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  onAddItem() {
    this.setShowInput(true);
  }

  setShowInput(showInput) {
    this.setState({
      showInput,
    });
  }

  onSetItem(item) {
    this.setItem(item);
  }

  setItem(item) {
    this.setState({
      item,
    });
  }

  onSubmitItem() {
    this.setShowInput(false);
    this.setItem(null);
  }

  render() {
    const { showInput, item } = this.state;

    const submitItemButtonComponent = showInput &&
      item && (
        <View style={styles.submitItemButtonContainer}>
          <IconButton name="check" handlePress={this.onSubmitItem} />
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
          >
            <Logo />
          </Animator>

          <Animator
            type="translateY"
            initialValue={-60}
            finalValue={0}
            shouldAnimateIn={showInput}
            shouldAnimateOut={!showInput}
            style={styles.inputContainer}
          >
            <TextInput
              placeholder="Enter the item's name..."
              value={item}
              handleChange={this.onSetItem}
              handleSubmit={this.onSubmitItem}
            />
          </Animator>
        </HeaderBar>

        <InputContainer style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
          <BlankState
            iconName="shopping-basket"
            title="You have no items"
            description="Add items by tapping the '+' button below. They'll show up here."
          />

          <Animator
            type="translateY"
            initialValue={100}
            finalValue={0}
            shouldAnimateIn={!showInput}
            shouldAnimateOut={showInput}
            style={styles.addItemButtonContainer}
          >
            <Animator
              type="scale"
              initialValue={0.5}
              finalValue={1}
              shouldAnimateIn={!showInput}
              shouldAnimateOut={showInput}
            >
              <IconButton name="add" handlePress={this.onAddItem} />
            </Animator>
          </Animator>

          {submitItemButtonComponent}
        </InputContainer>

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
