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
                        count: state.itemCount = state.itemCount + 1
                    };
                } else {
                    state.itemCount = 1;
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
                state.itemCount = state.itemCount++;
                state.cartCounter = state.cartCounter + 1;
                state.cartPrice = state.cartPrice + item.price;
            },
            increment(state, action) {
                const item = action.payload;
                const index = state.cartItems.findIndex(el => el.id === item.id && el.type === item.type && el.size === item.size);
                state.cartItems[index] = {
                    ...state.cartItems[index],
                    count: item.count + 1
                };
            },
            decrement(state, action) {
                const item = action.payload;
                const index = state.cartItems.findIndex(el => el.id === item.id && el.type === item.type && el.size === item.size);
                state.cartItems[index] = {
                    ...state.cartItems[index],
                    count: item.count - 1
                };
                console.log(item.count);
                if (item.count === 1) {
                    console.log('1');
                    state.cartItems.splice(index, 1);
                }
                state.itemCount = state.itemCount - 1;
            },
            clearCart(state, action) {
                state.cartItems = []
            },
            cartInfo(state, action) {
                let count = 0;
                let price = 0;
                state.cartItems.map((item) => {
                    count = count + item.count;
                    price = price + item.price * item.count
                });
                state.cartCounter = count;
                state.cartPrice = price
            },
            removeItem(state, action) {
                const item = action.payload
                const index = state.cartItems.findIndex(el => el.id === item.id && el.type === item.type && el.size === item.size);
                state.cartItems.splice(index, 1);
            }
        }
    }
);
export const {increment, decrement, addNewItem, clearCart, cartInfo, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
