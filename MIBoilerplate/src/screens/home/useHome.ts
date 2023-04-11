import { useCallback, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { useAppContext } from '@src/context';
import { setUsers, useAppDispatch, usersData } from '@src/store';

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

  const currentPage = useRef(1);

  const users = useSelector(usersData);
  const dispatch = useAppDispatch();

  const getUsersData = useCallback(
    async (page: number) => {
      const getUsers = await services.listUsers({ page, per_page: 3 });
      dispatch(setUsers(getUsers));
    },
    [dispatch, services]
  );

  const paging = useCallback(() => {
    currentPage.current = currentPage.current + 1;
    getUsersData(currentPage.current);
  }, [getUsersData]);

  useEffect(() => {
    getUsersData(currentPage.current);
  }, [getUsersData]);

  return {
    appTheme,
    contents,
    language,
    loader: loader.current,
    navigation,
    paging,
    setAppTheme,
    setLanguageInApp,
    styles: styles.homeStyle,
    users,
  };
};
