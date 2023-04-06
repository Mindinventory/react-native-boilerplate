import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useAppContext } from '@src/context';
import { setUsers, useAppDispatch, usersData } from '@src/store';
//

export const useHome = () => {
  const {
    contents,
    loader,
    styles,
    setLanguageInApp,
    language,
    navigation,
    services,
    appTheme,
    setAppTheme,
  } = useAppContext();

  const users = useSelector(usersData);
  const dispatch = useAppDispatch();

  const getUsersData = useCallback(async () => {
    const getUsers = await services.listUsers({ page: 1, per_page: 3 });
    dispatch(setUsers(getUsers));
  }, [dispatch, services]);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  return {
    appTheme,
    contents,
    language,
    loader: loader.current,
    navigation,
    setAppTheme,
    setLanguageInApp,
    styles: styles.homeStyle,
    users,
  };
};
