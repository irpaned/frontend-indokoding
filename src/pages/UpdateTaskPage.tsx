import { useParams } from "react-router-dom";
import { useEditProduct } from "../features/hooks/useUpdateTask";
import { useDetailTask } from "../features/hooks/useDetailTask";

function UpdateTaskPage() {
  const { id } = useParams<{ id: string }>();
  const numbericId = Number(id);
  const { tasks } = useDetailTask(numbericId);
  const { errors, handleSubmit, onSubmit, register } =
    useEditProduct(numbericId);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <input
            {...register("title")}
            defaultValue={tasks?.title}
            type="text"
            placeholder="Title"
          />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}

          <input
            {...register("description", { required: false })}
            defaultValue={tasks?.description}
            type="text"
            placeholder="Description"
          />
          {errors.description && <p>{errors.description.message}</p>}

          <select
            {...register("isCompleted", {
              setValueAs: (value) => value === "true",
            })}
            defaultValue={tasks?.isCompleted ? "true" : "false"}
          >
            <option value="false">Not Completed</option>
            <option value="true">Completed</option>
          </select>

          {errors.isCompleted && (
            <p style={{ color: "red" }}>{errors.isCompleted.message}</p>
          )}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTaskPage;
