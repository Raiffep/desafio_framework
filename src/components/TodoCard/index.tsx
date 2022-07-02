import React, { useState, memo } from 'react';
import { Checkbox } from 'react-native-paper';
import { theme } from '../../themes';;
import { CardTodo, Title } from './styles';
interface ITodoProps {
  item: {
    completed: boolean;
    title: string;
  };
  index: number;
  handleCheckTask: (index: number) => void;
}

export const TodoCard = memo(({ item, index, handleCheckTask }: ITodoProps) => {
  const [checked, setChecked] = useState(item.completed);

  return (
    <CardTodo>
      <Checkbox
        color={theme.primary}
        onPress={() => {
          setChecked(!checked)
          handleCheckTask(index)
        }}
        status={checked ? 'checked' : 'unchecked'} />
      <Title isChecked={checked}>{item.title}</Title>
    </CardTodo>
  );
})
