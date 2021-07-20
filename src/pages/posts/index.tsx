import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import api from "../../services";

import { Container, TitleHeader, BodyPosts, CardPost, Title } from './styles';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(
      (response) => {
        setPosts(response.data.slice(0, 10));
      }).catch((error) => {
        console.error(error)
      })
  }, []);
  console.log(posts[0])

  return (
    <Container>
      <Header
        rightComponent={<TitleHeader>Postagens</TitleHeader>}
      />
      <BodyPosts>
        {posts &&
          <FlatList
            data={posts}
            contentContainerStyle={{ paddingVertical: 16 }}
            keyExtractor={(item, index) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardPost>
                <Title>{item.title}</Title>
              </CardPost>
            )}
          />
        }
      </BodyPosts>
    </Container>
  )
};

export default Posts;
