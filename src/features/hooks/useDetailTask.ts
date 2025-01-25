import { useQuery } from "@tanstack/react-query";
import { TaskEntity } from "../entities/TaskEntity";
import { axiosInstance } from "../../libs/axios";

export const useDetailTask = (id: number) => {
  const { data: tasks } = useQuery<TaskEntity>({
    queryKey: ["detailTasksKey"],
    queryFn: getOneProducts,
  });

  async function getOneProducts() {
    const response = await axiosInstance.get(`/tasks/${id}`);
    return response.data;
  }

  return {
    tasks,
  };
};
