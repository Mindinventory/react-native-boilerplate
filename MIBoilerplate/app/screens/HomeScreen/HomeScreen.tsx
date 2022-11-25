import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {miLogoImg} from 'app-assets';
import {RootStackParams} from 'app-navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useHomeScreen} from './useHomeScreen';
import {TodosRes} from 'app-services';
import TodoList from './todoList';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

export type HomeScreenRouteProps = RouteProp<RootStackParams, 'HomeScreen'>;

const HomeScreen = () => {
  const {todoData, onPressCard} = useHomeScreen();

  const renderTodoList = ({item}: {item: TodosRes}): JSX.Element => {
    return <TodoList listItem={item} onPressCard={onPressCard} />;
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <Image source={miLogoImg} resizeMode="contain" style={styles.logo} />
      </View>

      <FlatList
        data={todoData}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderTodoList}
      />
    </View>
  );
};

export default HomeScreen;
