import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header, TodoCard } from "../../components";
import {
  Container,
  TitleHeader,
  BodyTodos,
  SeparatorLine,
  ListTodos
} from './styles';
import { GetTodos, ITodo } from "../../services/TodosService";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const listTodosStorekey = '@Todos';

  const loadStorageData = async () => {
    try {
      const dataTodos = await AsyncStorage.getItem(listTodosStorekey);
      const parsedTodos = dataTodos && JSON.parse(dataTodos);
      if (parsedTodos?.length) {
        setTodos(parsedTodos);
        return;
      }
      const response = await GetTodos();
      if (response) {
        setTodos(response);
        await AsyncStorage.setItem(listTodosStorekey, JSON.stringify(response));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  const handleCheckTask = (index: number) => {
    const listTodos: ITodo[] = [...todos];
    listTodos[index].completed = !listTodos[index].completed;
    setTodos(listTodos);
  }

  return (
    <Container>
      <Header rightComponent={<TitleHeader>To-Dos</TitleHeader>} />
      <BodyTodos>
        {todos &&
          <ListTodos
            data={todos}
            keyExtractor={(item, index) => String(index)}
            ItemSeparatorComponent={() => <SeparatorLine />}
            renderItem={({ item, index }) => (
              <TodoCard
                item={item as ITodo}
                index={index}
                handleCheckTask={handleCheckTask}
              />
            )}
          />
        }
      </BodyTodos>
    </Container>
  )
};

export default Todos;
