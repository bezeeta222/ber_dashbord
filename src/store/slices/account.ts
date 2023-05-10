import { createSlice } from '@reduxjs/toolkit';

interface AccountState {
  username: string;
  email: string;
  isLoggedIn: boolean;
  token: any;
}

const initialState: AccountState = {
  username: '',
  email: '',
  isLoggedIn: false,
  token: ''
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { updateUser, updateToken } = accountSlice.actions;
export default accountSlice.reducer;
