import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App, store } from '.';

describe('<App />', () => {
  it('should render static information', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('p-edit')).toHaveTextContent(
      'Edit src/App.tsx and save to reload.'
    );

    expect(screen.getByTestId('span-learn')).toHaveTextContent(
      'Learn React, Redux, Redux Toolkit, and React Redux'
    );
  });
});
