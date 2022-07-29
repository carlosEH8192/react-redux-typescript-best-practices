import { useAppSelector } from '../common/hooks';
import { Counter } from '../features/counter';
import './App.css';

export const App = () => {
  const { status, errorMessage } = useAppSelector((state) => state.global);

  return (
    <div className="App">
      {errorMessage && <h1 style={{ color: 'red' }}>Ocorreu um erro!</h1>}

      {status === 'loading' && (
        <h1 style={{ color: 'green' }}>Carregando...</h1>
      )}

      <header className="App-header">
        <Counter />

        <p data-testid="p-edit">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <span data-testid="span-learn">
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};
