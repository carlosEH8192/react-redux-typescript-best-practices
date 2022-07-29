import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../common/hooks';
import { decrement, increment, incrementAsync, incrementByAmount } from './';
import styles from './Counter.module.css';

export const Counter = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          data-testid="button-decrement"
        >
          -
        </button>

        <span className={styles.value} data-testid="span-value">
          {value}
        </span>

        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          data-testid="button-increment"
        >
          +
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount || ''}
          onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
          data-testid="input-increment-amount"
        />

        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
          data-testid="button-add-amount"
        >
          Add Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
          data-testid="button-add-async"
        >
          Add Async
        </button>
      </div>
    </div>
  );
};
