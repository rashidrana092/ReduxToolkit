import {createSlice, nanoid} from '@reduxjs/toolkit';

// const initialState = {
//   id: 0,
// };

const uniqueIdSlice = createSlice({
  name: 'id',
  initialState: {id: nanoid()},
  reducers: {
    getId: (state, action) => {
      // state.id;
      state.id = action.payload;
      // state.id.push(action.payload);  for insert valur in array
    },
  },
});

export const {getId} = uniqueIdSlice.actions;

export default uniqueIdSlice.reducer;
