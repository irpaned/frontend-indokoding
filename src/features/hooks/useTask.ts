import { useQuery } from "@tanstack/react-query";
import { TaskEntity } from "../entities/TaskEntity";
import { axiosInstance } from "../../libs/axios";

export const useProduct = () => {
  const { data: tasks } = useQuery<TaskEntity[]>({
    queryKey: ["tasksKey"],
    queryFn: getAllProducts,
  });

  async function getAllProducts() {
    const response = await axiosInstance.get("/tasks");
    return response.data.reverse();
  }

  return {
    tasks,
  };
};
