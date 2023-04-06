import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserResult } from '@src/services';

type MapDataValue = {
  users: UserResult[];
};

const initialState: MapDataValue = {
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
  reducer: userData,
  actions: { resetUserData, setUsers },
  name: userDataName,
} = userDataSlice;
