/* eslint-disable testing-library/render-result-naming-convention */
import { render, RenderResult, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Counter } from './';
import { store } from '../../app';
import userEvent from '@testing-library/user-event';

const getUi = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const getButtonDecrement = (screen: RenderResult) =>
  screen.getByTestId('button-decrement');

const getSpanValue = (screen: RenderResult) => screen.getByTestId('span-value');

const getButtonIncrement = (screen: RenderResult) =>
  screen.getByTestId('button-increment');

const getInputIncrementAmount = (screen: RenderResult) =>
  screen.getByTestId('input-increment-amount') as HTMLInputElement;

const getButtonAddAmount = (screen: RenderResult) =>
  screen.getByTestId('button-add-amount');

const getButtonAddAsync = (screen: RenderResult) =>
  screen.getByTestId('button-add-async');

const setupUserEvent = () => userEvent.setup();

describe('<Counter />', () => {
  // it('should render screen default state', () => {
  //   const screen = render(getUi());

  //   expect(getButtonDecrement(screen)).toHaveTextContent('-');
  //   expect(getSpanValue(screen)).toHaveTextContent('0');
  //   expect(getButtonIncrement(screen)).toHaveTextContent('+');
  //   expect(getInputIncrementAmount(screen)).toHaveValue('2');
  //   expect(getButtonAddAmount(screen)).toHaveTextContent('Add Amount');
  //   expect(getButtonAddAsync(screen)).toHaveTextContent('Add Async');
  // });

  it('should decrement counter value', async () => {
    const user = setupUserEvent();
    const screen = render(getUi());

    const buttonDecrement = getButtonDecrement(screen);
    const spanValue = getSpanValue(screen);

    await user.click(buttonDecrement);

    await waitFor(() => {
      expect(spanValue).toHaveTextContent('-1');
    });
  });

  it('should increment counter value', async () => {
    const user = setupUserEvent();
    const screen = render(getUi());

    const spanValue = getSpanValue(screen);
    const buttonIncrement = getButtonIncrement(screen);

    await user.click(buttonIncrement);

    await waitFor(() => {
      expect(spanValue).toHaveTextContent('1');
    });
  });

  // it('should change increment amount', async () => {
  //   const user = setupUserEvent();
  //   const screen = render(getUi());

  //   const inputIncrementAmount = getInputIncrementAmount(screen);

  //   await user.clear(inputIncrementAmount);
  //   await user.type(inputIncrementAmount, '4');
  //   expect(inputIncrementAmount.value).toBe('4');
  // });

  // it('should add amount', async () => {
  //   const user = setupUserEvent();
  //   const screen = render(getUi());

  //   const spanValue = getSpanValue(screen);
  //   const buttonAddAmount = getButtonAddAmount(screen);

  //   await user.click(buttonAddAmount);
  //   expect(spanValue).toHaveTextContent('2');
  // });

  // it('should add async', async () => {
  //   expect(true).toBe(false);
  // });
});
