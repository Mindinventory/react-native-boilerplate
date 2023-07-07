import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserResult } from '@src/services';

type UserData = {
  users: UserResult[];
};

const initialState: UserData = {
  users: [],
};

export const userDataSlice = createSlice({
  initialState,
  name: 'userData',
  reducers: {
    resetUserData: () => initialState,
    setUsers: (state, { payload }: PayloadAction<UserResult[] | []>) => {
      state.users = payload;
    },
  },
});

export const {
  actions: { resetUserData, setUsers },
  name: userDataName,
  reducer: userData,
} = userDataSlice;
