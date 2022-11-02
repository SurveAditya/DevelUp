import { createSlice } from '@reduxjs/toolkit';


const initialState={
  name:'old',
  imgUrl:'',
  display:''




}

export const addSlice = createSlice({
  name: 'add',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchAdd: (state,action) => {
      state.add = action.payload
      
       
    },
    // logout: (state,action) => {
    //   state.loading=null
    // },

  
  },

});

export const { fetchAdd } = addSlice.actions;
export const selectadd = (state) => state.add;
export default addSlice.reducer;
