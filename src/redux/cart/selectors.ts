import { RootState } from '../store';

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
export const selectCart = (state: RootState) => state.cart;
