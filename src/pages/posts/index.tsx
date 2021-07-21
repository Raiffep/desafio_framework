import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import { GetPosts } from "../../services/providers/postsProvider";
import { GetAlbums } from "../../services/providers/albumsProvider";
import { GetTodos } from "../../services/providers/todosProvider";
import {
  Container,
  TitleHeader,
  BodyPosts,
  CardPost,
  Title,
  SeparatorLine,
  BodyText,
  ViewLoading,
  LoadingIcon,
  LoadingText
} from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataPosts = async () => {
    let data = await AsyncStorage.getItem("@Posts");
    if (!data) {
      GetPosts();
      data = await AsyncStorage.getItem("@Posts");
      const dataParsed = JSON.parse(data);
      setPosts(dataParsed);
    }
    const dataParsed = JSON.parse(data);
    setPosts(dataParsed);
  }

  getDataPosts();

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
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CardPost>
                  <Title>{item.title}</Title>
                  <SeparatorLine />
                  <BodyText>{item.body}</BodyText>
                </CardPost>
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
