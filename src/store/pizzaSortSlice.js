import {createSlice} from '@reduxjs/toolkit';

const pizzaSortSlice = createSlice({
        name: 'pizzaSort',
        initialState: {
           sortValue: 0
        },
        reducers: {
            setSortValue(state, action) {
                const item = action.payload
                state.sortValue = item
            }
        }
    }
);
export const {setSortValue} = pizzaSortSlice.actions;
export default pizzaSortSlice.reducer;
