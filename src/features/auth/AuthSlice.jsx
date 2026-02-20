import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export let fetchdata=createAsyncThunk(
  "auth/fetchdata",
  async(Credential,{rejectWithValue})=>{
    try{
     let response=await fetch("http://localhost:3333/user/login",{method:"POST",headers:{"Content-Type": "application/json"},body:JSON.stringify(Credential)})
     let jsodata=await response.json();
     if(!response.ok){
      return rejectWithValue("invalid credientials")
     }
     localStorage.setItem("token",jsodata.data.token)
     return jsodata.data;

    }
    catch(err){
      return rejectWithValue(err.message)
    }
  }
)
const initialState = {
  firstName: null,
  lastName: null,
  token: null,
  loading:false,
  error:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      
    },
    logout: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.token = null;
      
    }
  },
  extraReducers: (builder) => {
  builder
    .addCase(fetchdata.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchdata.fulfilled, (state, action) => {
      state.loading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
    })
    .addCase(fetchdata.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
}

});

export const {setCredentials,  logout } = authSlice.actions;
export default authSlice.reducer;
