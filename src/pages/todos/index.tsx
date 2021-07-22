import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import TodoCard from "../../components/TodoCard";

import {
  Container,
  TitleHeader,
  BodyTodos,
  SeparatorLine
} from './styles';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      try {
        const dataTodos: any = await AsyncStorage.getItem('@Todos');
        const value = JSON.parse(dataTodos);
        if (value && value.length) {
          setTodos(value);
        } else {
          fetch('https://jsonplaceholder.typicode.com/todos').then(
            response => {
              response.json().then(data => {
                setTodos(data);
                AsyncStorage.setItem('@Todos', JSON.stringify(data));
              })
            }
          )
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadStorageData();
  }, []);

  const handleCheckTask = (index: number) => {
    const listTodos: [] = [...todos];
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
              <TodoCard
                item={item}
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
