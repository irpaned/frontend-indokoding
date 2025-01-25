import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskDto } from "../dto/TaskDTO";
import { TaskValidate } from "../validations/TaskValidate";
import { axiosInstance } from "../../libs/axios";
import { useNavigate } from "react-router-dom";

export const useEditProduct = (id: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskDto>({
    mode: "onSubmit",
    resolver: zodResolver(TaskValidate),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (newProduct: TaskDto) => {
      const response = await axiosInstance.put(`/tasks/${id}`, newProduct);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasksKey"] });
      navigate("/");
    },
  });

  const onSubmit: SubmitHandler<TaskDto> = async (data) => {
    try {
      mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
