import { RootState } from '../index';

export const usersData = (state: RootState) => state.userData.users;

export const isForceUpdate = (state: RootState) => state.userData.isForceUpdate;
