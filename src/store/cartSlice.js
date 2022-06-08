import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            cartItems: [],
            cartCounter: 0,
            cartPrice: 0,
            itemCount: 0
        },
        reducers: {
            increment(state, action) {
            },
            decrement(state, action) {
            },

            addNewItem(state, action) {
                const item = action.payload;
                const index = state.cartItems.findIndex(el => el.id === item.id && el.type === item.type && el.size === item.size);
                if (index !== -1) {
                    state.cartItems[index] = {
                        id: item.id,
                        imageUrl: item.imageUrl,
                        price: item.price,
                        size: item.size,
                        title: item.title,
                        type: item.type,
                        count: state.itemCount = state.itemCount+1
                    };
                } else {
                    state.itemCount = 1
                    state.cartItems = [
                        ...state.cartItems,
                        {
                            id: item.id,
                            imageUrl: item.imageUrl,
                            price: item.price,
                            size: item.size,
                            title: item.title,
                            type: item.type,
                            count: 1
                        }
                    ];
                }
                state.itemCount = state.itemCount++
                state.cartCounter++
                state.cartPrice = state.cartPrice + item.price
            }
        }
    }
);
export const {increment, decrement, addNewItem} = cartSlice.actions;
export default cartSlice.reducer;
