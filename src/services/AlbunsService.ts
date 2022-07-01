import Api from "./Api";

export interface IAlbum {
  title: string;
}

export const GetAlbuns = async (): Promise<IAlbum[]> => {
  try {
    const response = await Api.get('/albuns');

    return response.data;
  } catch (error) {
    throw error;
  }
}
