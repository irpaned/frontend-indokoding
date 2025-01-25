import { useAddTask } from "../hooks/useAddTask";

function InputAddTask() {
  const { errors, handleSubmit, onSubmit, register } = useAddTask();

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
          <input {...register("title")} type="text" placeholder="Title" />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
          <input
            {...register("description", {
              setValueAs: (value) =>
                value.trim() === "" ? null : value.trim(),
            })}
            type="text"
            placeholder="Description"
          />
          {errors.description && <p>{errors.description.message}</p>}
          <select
            {...register("isCompleted", {
              setValueAs: (value) => value === "true",
            })}
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

export default InputAddTask;
