import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Cart Component] Increment', props<{value: number}>());
export const decrement = createAction('[Cart Component] Decrement');
export const reset = createAction('[Cart Component] Reset');