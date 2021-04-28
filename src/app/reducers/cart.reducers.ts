import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/cart.action';
 
export const initialState = 0;
 
const _cartReducer = createReducer(
  initialState,
  on(increment, (state, number) =>  state + number.value),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}