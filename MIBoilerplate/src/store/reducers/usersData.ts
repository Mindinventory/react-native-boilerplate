import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserResult } from '@src/services';

type AppData = {
  users: UserResult[];
  isForceUpdate: boolean;
};

const initialState: AppData = {
  isForceUpdate: false,
  users: [],
};

export const userDataSlice = createSlice({
  initialState,
  name: 'userData',
  reducers: {
    resetUserData: () => initialState,
    setForceUpdate: (state, { payload }: PayloadAction<boolean>) => {
      state.isForceUpdate = payload;
    },
    setUsers: (state, { payload }: PayloadAction<UserResult[] | []>) => {
      state.users = payload;
    },
  },
});

export const {
  actions: { resetUserData, setForceUpdate, setUsers },
  name: userDataName,
  reducer: userData,
} = userDataSlice;
