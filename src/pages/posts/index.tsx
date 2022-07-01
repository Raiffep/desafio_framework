import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetPosts, IPost } from "../../services/PostsService";
import { Header, PostCard } from "../../components";
import {
  Container,
  TitleHeader,
  BodyPosts,
  ViewLoading,
  LoadingIcon,
  LoadingText,
  ListPosts
} from './styles';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const postStoreKey = '@Posts';

  const loadStorageData = async () => {
    try {
      const dataPosts = await AsyncStorage.getItem(postStoreKey);
      const parsedPosts: IPost[] = dataPosts && JSON.parse(dataPosts);
      if (parsedPosts.length) {
        setPosts(parsedPosts);
        return;
      }
      const response = await GetPosts();
      if (response) {
        setPosts(response);
        await AsyncStorage.setItem(postStoreKey, JSON.stringify(response));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <Container>
      <Header rightComponent={<TitleHeader>Postagens</TitleHeader>} />
      {!loading ? (
        <BodyPosts>
          {posts &&
            <ListPosts
              data={posts}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => <PostCard post={item as IPost} />}
              getItemLayout={(data, index) => ({
                length: 200,
                offset: 200 * index,
                index
              })}
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
