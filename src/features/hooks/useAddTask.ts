import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TaskValidate } from "../validations/TaskValidate";
import { TaskDto } from "../dto/TaskDTO";
import { TaskEntity } from "../entities/TaskEntity";
import { axiosInstance } from "../../libs/axios";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TaskDto>({
    mode: "onSubmit",
    resolver: zodResolver(TaskValidate),
  });

  const { mutateAsync } = useMutation<TaskEntity, AxiosError, TaskDto>({
    mutationFn: async (task) => {
      return await axiosInstance.post("/tasks", task);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasksKey"] });
    },
  });

  const onSubmit: SubmitHandler<TaskDto> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setValue,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
