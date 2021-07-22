import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { Container, TitleHeader, BodyPosts } from './styles';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      try {
        const dataAlbums = await AsyncStorage.getItem('@Albums');
        const value = JSON.parse(dataAlbums);
        if (value && value.length) {
          setAlbums(value);
        } else {
          fetch('https://jsonplaceholder.typicode.com/albums').then(
            response => {
              response.json().then(data => {
                setAlbums(data);
                AsyncStorage.setItem('@Albums', JSON.stringify(data));
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
        rightComponent={<TitleHeader>Albums</TitleHeader>}
      />
      <BodyPosts>
        {albums &&
          <FlatList
            data={albums}
            numColumns={2}
            windowSize={10}
            initialNumToRender={6}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 16 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <ImageCard key={item.id} item={item} />
            )}
          />
        }
      </BodyPosts>
    </Container>
  )
};

export default Albums;
