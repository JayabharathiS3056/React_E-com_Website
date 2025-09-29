//reducer file need createslice library
import { createSlice } from "@reduxjs/toolkit";

//storing cartSlice function inside cartSlice expression
//creating a cart step by step, name of page is cart, it acts like a list, whenever user added a item into cart it will get added into this list
export const cartSlice = createSlice({
    name:"cart",
    initialState: {
        list:[],
    },
    reducers:{
        addItem : (state ,{payload}) => {
            state.list = [...state.list ,{...payload ,count:1} ];
        },
        removeItem:(state , {payload}) =>{
            const index = state.list.findIndex(
                (product) => product.id === payload.id);
            state.list = [
                ...state.list.slice(0 , index),
                ...state.list.slice(index + 1),
            ];
        },
        modifyItem:(state,{payload}) =>{
            const index = state.list.findIndex(
                (product) => product.id === payload.id);
                state.list = [ 
                    ...state.list.slice(0 ,index),
                    {
                        ...state.list[index], count : payload.count
                    },
                    ...state.list.slice(index + 1),
                ]
            }
    },

});

export const {addItem ,removeItem,modifyItem} =cartSlice.actions;
export default cartSlice.reducer;
