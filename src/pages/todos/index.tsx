import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Checkbox } from "react-native-paper";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetTodos } from "../../services/providers/todosProvider";
import { theme } from "../../themes";

import {
  Container,
  TitleHeader,
  BodyTodos,
  CardTodo,
  Title,
  SeparatorLine
} from './styles';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const getDataTodos = async () => {
    let data = await AsyncStorage.getItem("@Todos");
    if (!data) {
      GetTodos();
      data = await AsyncStorage.getItem("@Todos");
      const dataParsed = JSON.parse(data);
      setTodos(dataParsed);
    }
    const dataParsed = JSON.parse(data);
    setTodos(dataParsed);
  }

  getDataTodos();

  const handlecheckTask = (index: number) => {
    const listTodos = [...todos];
    listTodos[index].completed = !listTodos[index].completed;
    setTodos(listTodos);
  }

  return (
    <Container>
      <Header
        rightComponent={<TitleHeader>To-Dos</TitleHeader>}
      />
      <BodyTodos>
        {todos &&
          <FlatList
            data={todos}
            windowSize={10}
            initialNumToRender={10}
            removeClippedSubviews={true}
            contentContainerStyle={{ paddingBottom: 16 }}
            ItemSeparatorComponent={() => <SeparatorLine />}
            keyExtractor={(item, index) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CardTodo>
                <Checkbox
                  color={theme.primary}
                  onPress={() => handlecheckTask(index)}
                  status={item.completed ? 'checked' : 'unchecked'} />
                <Title isChecked={item.completed}>{item.title}</Title>
              </CardTodo>
            )}
          />
        }
      </BodyTodos>
    </Container>
  )
};

export default Todos;
