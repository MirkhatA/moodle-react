import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.token));
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.token = null;
    },
  },
});

export const {setToken, logout} = authSlice.actions;
export default authSlice.reducer;

