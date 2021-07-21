import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";

export function GetTodos() {
  api.get('/todos').then(
    (response) => {
      AsyncStorage.setItem("@Todos", JSON.stringify(response.data));
    }).catch((error) => {
      console.error(error)
    });
}
