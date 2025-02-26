import { createSlice } from '@reduxjs/toolkit';
import { userState } from '../helper/types.ts';

const initialState: userState = {
  id: null,
  username: '',
  passwords: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.usernae;
    },
    setCurrentPasswords: (state, action) => {
      state.passwords = action.payload;
    },
    deleteAPassword: (state, action) => {
      state.passwords = state.passwords.filter(
        (password) => password.id != action.payload,
      );
    },
    addPassword: (state, action) => {
      state.passwords.push(action.payload);
    },
    updatePassword: (state, action) => {
      const item = state.passwords.find((password) => password.id === action.payload.id);
      if (item) {
        item.title = action.payload.title;
        item.description = action.payload.description;
      }
    },
  },
});

export const {
  deleteAPassword,
  updatePassword,
  addPassword,
  setCurrentUser,
  setCurrentPasswords,
} = userSlice.actions;

export default userSlice.reducer;

export const getCurrentPasswords = (state: { user: userState }) => state.user.passwords;
