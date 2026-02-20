import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchdata=createAsyncThunk(//it will start exicution and return the data and dispatch will give to reucer
    "products/fetchdata",
    async()=>{
      let response=await fetch("http://localhost:3333/products");
      let jsodata=await response.json()
      return jsodata
    }
)

let initialState={
   products:[],
   loading:false,
   error:null
}
let productvalues=createSlice({
    name:"products",
    initialState,
    reducers:{
        // getproducts:(state,action)=>{
        //     state.products = action.payload,
        //     state.loading=false
        // }
    },
    extraReducers:(builder)=>{//extrareducers take action check wheather it is succes or pending or failled and return to state and updated in the selector
    builder.addCase(fetchdata.pending,(state)=>{
        state.loadig=true
    })
    .addCase(fetchdata.fulfilled,(state,action)=>{
        state.loadig=false;
        state.products=action.payload
    })
    .addCase(fetchdata.rejected,(state)=>{
        state.loadig=false;
        state.error="error fetching data"
    })
    }

})

 
export default productvalues.reducer;