import { Action } from '@reduxjs/toolkit';

export type GlobalState = {
  status: 'idle' | 'loading' | 'failed';
  errorMessage: string | null;
};

export type RejectedAction = Action & {
  error: Error;
};
