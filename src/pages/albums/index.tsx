import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetAlbums } from "../../services/providers/albumsProvider";
import { FlatList } from "react-native";
import Header from "../../components/Header";

import { Container, TitleHeader, BodyPosts, CardPost, Title } from './styles';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState([]);

  const getDataAlbums = async () => {
    let data = await AsyncStorage.getItem("@Albums");
    if (!data) {
      GetAlbums();
      data = await AsyncStorage.getItem("@Albums");
      const dataParsed = JSON.parse(data);
      setAlbums(dataParsed);
    }
    if (data !== JSON.stringify(albums)) {
      const dataParsed = JSON.parse(data);
      setAlbums(dataParsed);
    }
  }

  getDataAlbums();

  return (
    <Container>
      <Header
        rightComponent={<TitleHeader>Albums</TitleHeader>}
      />
      <BodyPosts>
        {albums &&
          <FlatList
            data={albums}
            windowSize={10}
            initialNumToRender={6}
            removeClippedSubviews={true}
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

export default Albums;
