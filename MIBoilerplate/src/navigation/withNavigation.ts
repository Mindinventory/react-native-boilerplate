import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import type {NavStackParams} from './appNavigation.type';

export declare type WithNavigation<
  NavProp extends NavigationProp<ParamListBase>,
  T
> = {
  navigation: NavProp;
  route: RouteProp<NavStackParams>;
} & T;

export function useWithNavigation<
  NavProp extends NavigationProp<ParamListBase>,
  T extends object
>(data: T): WithNavigation<NavProp, T> {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RouteProp<NavStackParams>>();

  return {...data, navigation, route};
}
