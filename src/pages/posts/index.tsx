import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import {
  Container,
  TitleHeader,
  BodyPosts,
  ViewLoading,
  LoadingIcon,
  LoadingText
} from './styles';


const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      try {
        const dataPosts = await AsyncStorage.getItem('@Posts');
        const value = JSON.parse(dataPosts);

        if (value && value.length) {
          setPosts(value);
        } else {
          fetch('https://jsonplaceholder.typicode.com/posts').then(
            response => {
              response.json().then(data => {
                setPosts(data);
                AsyncStorage.setItem('@Posts', JSON.stringify(data));
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

  return (
    <Container>
      <Header
        rightComponent={<TitleHeader>Postagens</TitleHeader>}
      />
      {!loading ? (
        <BodyPosts>
          {posts &&
            <FlatList
              data={posts}
              windowSize={10}
              initialNumToRender={3}
              removeClippedSubviews={true}
              contentContainerStyle={{ paddingVertical: 16 }}
              showsVerticalScrollIndicator={false}
              getItemLayout={(data, index) => ({
                length: 200,
                offset: 200 * index,
                index
              })}
              renderItem={({ item }: any) => (
                <PostCard key={item.id} post={item} />
              )}
            />
          }
        </BodyPosts>
      ) : (
        <ViewLoading>
          <LoadingIcon />
          <LoadingText>Carregando...</LoadingText>
        </ViewLoading>
      )}
    </Container>
  )
};

export default Posts;
