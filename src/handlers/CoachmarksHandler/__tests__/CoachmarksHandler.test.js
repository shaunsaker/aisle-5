import React from 'react';
import renderer from 'react-test-renderer';

import { CoachmarksHandler } from '..';
import COACHMARKS from '../coachmarks';
import ITEM from '../../../mockData/item';

jest.useFakeTimers();

describe('CoachmarksHandler', () => {
  const spies = [];
  const dispatch = jest.fn();
  const pendingList = { 1: { ...ITEM, isChecked: false } };
  const checkedPendingList = { 1: { ...ITEM, isChecked: true } };
  const userCoachmarks = {
    1: {
      coachmark_id: 'addItem',
    },
  };
  const tooltipID = 'addItem';
  const modalID = 'predictions';

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle keyboardDidShow', () => {
      spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onHideCoachmark');
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      // Setup
      instance.setCoachmarkID(tooltipID);

      instance.keyboardDidShow();

      expect(spies[0]).toHaveBeenCalledWith(tooltipID);
    });

    it('should handle hasUserSeenCoachmark', () => {
      const component = renderer.create(
        <CoachmarksHandler
          dispatch={dispatch}
          pendingList={pendingList}
          userCoachmarks={userCoachmarks}
        />,
      );
      const instance = component.getInstance();

      expect(instance.hasUserSeenCoachmark(tooltipID)).toEqual(true);
      expect(instance.hasUserSeenCoachmark('checkItem')).toEqual(null);
    });

    it('should handle hasUserCheckedFirstPendingListItem', () => {
      const component = renderer.create(
        <CoachmarksHandler
          dispatch={dispatch}
          pendingList={pendingList}
          userCoachmarks={userCoachmarks}
        />,
      );
      const instance = component.getInstance();

      expect(instance.hasUserCheckedFirstPendingListItem(pendingList)).toEqual(false);
      expect(instance.hasUserCheckedFirstPendingListItem(checkedPendingList)).toEqual(true);
    });

    describe('should handle onShowCoachmark', () => {
      it('when the coachmark is a tooltip', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'setCoachmarkID');
        spies[1] = jest.spyOn(CoachmarksHandler.prototype, 'navigate');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
        );
        const instance = component.getInstance();

        instance.onShowCoachmark(tooltipID);

        expect(spies[0]).toHaveBeenCalledWith(tooltipID);
        expect(spies[1]).not.toHaveBeenCalled();
      });

      it('when the coachmark is a modal', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'setCoachmarkID');
        spies[1] = jest.spyOn(CoachmarksHandler.prototype, 'navigate');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
        );
        const instance = component.getInstance();
        const coachmark = COACHMARKS[modalID];

        instance.onShowCoachmark(modalID);

        expect(spies[0]).toHaveBeenCalledWith(modalID);
        expect(spies[1]).toHaveBeenCalledWith('infoModal', { ...coachmark });
      });
    });

    it('should handle setCoachmarkID', () => {
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.setCoachmarkID(tooltipID);

      expect(instance.state.coachmarkID).toEqual(tooltipID);
    });

    it('should handle onHideCoachmark', () => {
      spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'setCoachmarkID');
      spies[1] = jest.spyOn(CoachmarksHandler.prototype, 'saveCoachmark');
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.onHideCoachmark(tooltipID);

      expect(spies[0]).toHaveBeenCalledWith(null);
      expect(spies[1]).toHaveBeenCalledWith(tooltipID);
    });

    it('should handle saveCoachmark', () => {
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.saveCoachmark(tooltipID);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle navigate', () => {
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.navigate();
    });
  });

  describe('lifecycle methods', () => {
    it('assigns a keyboard event listener in componentDidMount', () => {
      const component = renderer.create(
        <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      expect(instance.keyboardDidShowListener).toBeDefined();
    });

    describe('handles componentDidUpdate method calls', () => {
      it('should handle show addItem coachmark in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onShowCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={{}} />,
        );
        const coachmarkID = 'addItem';

        component.update(<CoachmarksHandler dispatch={dispatch} pendingList={{}} foo="bar" />); // force update

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
      });

      it('should handle show checkItem coachmark in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onShowCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={{}} />,
        );
        const coachmarkID = 'checkItem';

        component.update(<CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />);

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
      });

      it('should handle hide checkItem coachmark in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onHideCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
        );
        const instance = component.getInstance();
        const coachmarkID = 'checkItem';

        // Setup
        instance.setCoachmarkID(coachmarkID);

        component.update(
          <CoachmarksHandler dispatch={dispatch} pendingList={checkedPendingList} />,
        );

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
      });

      it('should handle show checkout coachmark in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onShowCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
        );
        const coachmarkID = 'checkout';

        component.update(
          <CoachmarksHandler dispatch={dispatch} pendingList={checkedPendingList} />,
        );

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
      });

      it('should handle hide checkout coachmark and should handle show predictions coachmark in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onHideCoachmark');
        spies[1] = jest.spyOn(CoachmarksHandler.prototype, 'onShowCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={checkedPendingList} />,
        );
        const instance = component.getInstance();
        const coachmarkID = 'checkout';

        // Setup
        instance.setCoachmarkID(coachmarkID);

        component.update(<CoachmarksHandler dispatch={dispatch} pendingList={{}} />);

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
        expect(spies[1]).toHaveBeenCalledWith(modalID);
      });

      it('should handle scene change in componentDidUpdate', () => {
        spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onHideCoachmark');
        const component = renderer.create(
          <CoachmarksHandler dispatch={dispatch} pendingList={checkedPendingList} />,
        );
        const instance = component.getInstance();
        const coachmarkID = 'checkout';

        // Setup
        instance.setCoachmarkID(coachmarkID);

        component.update(
          <CoachmarksHandler dispatch={dispatch} pendingList={checkedPendingList} scene="foo" />,
        );

        expect(spies[0]).toHaveBeenCalledWith(coachmarkID);
      });
    });
  });

  describe('actions', () => {
    it('calls onHideCoachmark on tooltip press', () => {
      // FIXME: Unsure how to test this (need to wait for animation to complete)
      // spies[0] = jest.spyOn(CoachmarksHandler.prototype, 'onHideCoachmark');
      // const component = renderer.create(
      //   <CoachmarksHandler dispatch={dispatch} pendingList={pendingList} />,
      // );
      // const { root } = component;
      // const targetComponent = root.findByProps({
      //   testID: `coachmarksHandler.tooltip.${tooltipID}`,
      // });
      // targetComponent.props.handlePress();
      // expect(spies[0]).toHaveBeenCalledWith(tooltipID);
    });
  });

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });
    dispatch.mockClear();
  });
});
