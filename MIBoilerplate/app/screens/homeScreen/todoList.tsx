import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AppText } from 'app-components';
import { default as themeStyles } from './styles';
import { TodosRes } from 'app-services';
import { useTheme } from 'app-theme';
interface TodoListProps {
  listItem: TodosRes;
  onPressCard: () => void;
}

const TodoList = (props: TodoListProps) => {
  const { listItem, onPressCard } = props;
  const { palette } = useTheme();
  const styles = themeStyles(palette);

  return (
    <TouchableOpacity
      style={[styles.cardLayout, { backgroundColor: listItem.backgroundColor }]}
      key={listItem.id}
      onPress={onPressCard}
    >
      <AppText preset="bold" style={styles.cardText}>
        {listItem.title}
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(TodoList);
