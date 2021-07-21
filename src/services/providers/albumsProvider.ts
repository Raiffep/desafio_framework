import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";

export function GetAlbums() {
  api.get('/albums').then(
    (response) => {
      AsyncStorage.setItem("@Albums", JSON.stringify(response.data));
    }).catch((error) => {
      console.error(error)
    });
}
