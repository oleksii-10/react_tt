import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SearchValue {
  value: string;
}

const initialState = { value: '' } as SearchValue;

const usersSearchSlice = createSlice({
  name: 'usersSearch',
  initialState,
  reducers: {
    change(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
})

export default usersSearchSlice;
