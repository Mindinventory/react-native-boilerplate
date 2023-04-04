import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserResponse} from '@src/services';

type MapDataValue = {
  users: Array<UserResponse>;
};

const initialState: MapDataValue = {
  users: [],
};

export const userDataSlice = createSlice({
  initialState,
  name: 'userData',
  reducers: {
    resetUserData: () => initialState,
    setUsers: (state, {payload}: PayloadAction<Array<UserResponse> | []>) => {
      state.users = payload;
    },
  },
});

export const {
  reducer: userData,
  actions: {resetUserData, setUsers},
  name: userDataName,
} = userDataSlice;
