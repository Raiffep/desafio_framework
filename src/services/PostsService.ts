import Api from "./Api";

export interface IPost {
  title: string;
  body: string;
}

export const GetPosts = async (): Promise<IPost[]> => {
  try {
    const response = await Api.get('/posts');

    return response.data;
  } catch (error) {
    throw error;
  }
}
