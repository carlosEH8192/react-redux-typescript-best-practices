import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { GlobalState, RejectedAction } from './';

const initialState: GlobalState = {
  status: 'idle',
  errorMessage: null,
};

const actionTypeEndsWith = (action: AnyAction, suffix: string) =>
  action.type.endsWith(suffix);

const isRejectedAction = (action: AnyAction): action is RejectedAction =>
  action.type.endsWith('rejected');

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => actionTypeEndsWith(action, 'pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(isRejectedAction, (state, action) => {
        state.errorMessage = action.error.message;
        state.status = 'failed';
      })
      .addMatcher(
        (action) => actionTypeEndsWith(action, 'fulfilled'),
        (state) => {
          state.status = 'idle';
        }
      )
      .addDefaultCase(() => {});
  },
});

export default globalSlice.reducer;
