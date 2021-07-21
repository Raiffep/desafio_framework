import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";

export function GetPosts() {
  api.get('/posts').then(
    (response) => {
      AsyncStorage.setItem("@Posts", JSON.stringify(response.data));
    }).catch((error) => {
      console.error(error)
    });
}
