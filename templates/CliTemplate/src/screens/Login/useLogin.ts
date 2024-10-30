import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import * as yup from 'yup';

import { useAppContext } from '@src/context';
import { logger } from '@src/utils';

import { loginStyles } from './Login.style';

const useLogin = () => {
  const { color, navigation } = useAppContext();

  const [disabled, setDisabled] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const fieldValidation = yup.object().shape({
    email: yup.string().trim().required('Please enter your Email'),
    password: yup.string().trim().required('Please enter your Password'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleButtonSubmit = useCallback(
    async (values: typeof initialValues) => {
      logger('values: ', values);
      setDisabled(true);
      await new Promise(res => setTimeout(res, 3000));
      setDisabled(false);
    },
    []
  );

  return {
    disabled,
    fieldValidation,
    handleButtonSubmit,
    initialValues,
    navigation,
    passwordRef,
    styles: loginStyles(color),
  };
};

export default useLogin;
