import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../libs/axios";

export const useDeleteTask = (id: number) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete("/tasks/" + id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasksKey"] });
    },
  });

  const onDelete = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onDelete,
  };
};
