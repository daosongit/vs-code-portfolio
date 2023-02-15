import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { state: 'light' },
  reducers: {
    changeTheme(state: { state: string }) {
      state.state = state.state === 'light' ? 'dark' : 'light';
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
