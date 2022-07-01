import Api from "./Api";

export interface ITodo {
  title: string;
  completed: boolean;
}

export const GetTodos = async (): Promise<ITodo[]> => {
  try {
    const response = await Api.get('/todos');

    return response.data;
  } catch (error) {
    throw error;
  }
}
