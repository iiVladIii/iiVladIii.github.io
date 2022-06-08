import {configureStore} from '@reduxjs/toolkit'
import cartPriceReducer from './cartSlice'

export default configureStore({
    reducer: {
        cart: cartPriceReducer,
        // cartCounter: cart
    }
})
