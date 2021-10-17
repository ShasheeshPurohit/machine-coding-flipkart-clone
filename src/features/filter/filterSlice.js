import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

export const filterSlice = createSlice({
    name: 'filter',
    initialState:{
        data: [...data],
        
    },
    reducers:{

        priceSort:(state, action)=>{

            switch(action.payload){
                case "high-to-low":
                     state.data = JSON.parse(JSON.stringify(state.data)).sort((a,b)=>b.price-a.price)
                     break;
                case "low-to-high":
                     state.data = JSON.parse(JSON.stringify(state.data)).sort((a,b)=>a.price-b.price)
                     break;
                default:
                    state.data = JSON.parse(JSON.stringify(state.data))
            }
            
        },
        idealForRed : (state, action)=>{

            
            const productData = JSON.parse(JSON.stringify(data))
            console.log(productData)
            state.data = productData.filter((product)=>product.idealFor===action.payload.value)
        
        },

        clearFilters: (state)=>{
            state.data = JSON.parse(JSON.stringify(data))
        },

        brandFil:(state, action)=>{
            const productData = JSON.parse(JSON.stringify(state.data))
            state.data = productData.filter((product)=>product.brand===action.payload)
        },

        sizeFil:(state, action)=>{
            const productData = JSON.parse(JSON.stringify(state.data))
            state.data = productData.filter((product)=>product.size.includes(action.payload))
        }
        
    }
})

export const {idealForRed, clearFilters, brandFil, sizeFil, priceSort} = filterSlice.actions;
export default filterSlice.reducer