import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('increment');
export const setName = createAction<string>('setName');
