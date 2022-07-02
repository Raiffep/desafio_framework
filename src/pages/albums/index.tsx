import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetAlbuns, IAlbum } from "../../services/AlbunsService";
import { Header, ImageCard } from "../../components";
import { Container, TitleHeader, BodyPosts, AlbunsList } from './styles';

export const Albuns: React.FC = () => {
  const [albuns, setAlbuns] = useState<IAlbum[]>([]);
  const listAlbunsStoreKey = '@Albuns';

  const loadStorageData = async () => {
    try {
      const dataAlbums = await AsyncStorage.getItem(listAlbunsStoreKey);
      const parsedAlbuns: IAlbum[] = dataAlbums && JSON.parse(dataAlbums);
      if (parsedAlbuns?.length) {
        setAlbuns(parsedAlbuns);
        return;
      }
      const response = await GetAlbuns();
      if (response) {
        setAlbuns(response);
        await AsyncStorage.setItem(listAlbunsStoreKey, JSON.stringify(response));
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
      <Header><TitleHeader>Albums</TitleHeader></Header>
      <BodyPosts>
        {albuns &&
          <AlbunsList
            data={albuns}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => <ImageCard item={item as IAlbum} />}
          />
        }
      </BodyPosts>
    </Container>
  )
};
