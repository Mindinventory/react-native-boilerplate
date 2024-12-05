import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export declare type WithNavigation<
  NavProp extends NavigationProp<ParamListBase>,
  T
> = {
  navigation: NavProp;
} & T;

export function useWithNavigation<
  NavProp extends NavigationProp<ParamListBase>,
  T extends object
>(data: T): WithNavigation<NavProp, T> {
  const navigation = useNavigation<NavProp>();

  return { ...data, navigation };
}
