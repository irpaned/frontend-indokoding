import { Link } from "react-router-dom";
import { TaskEntity } from "../entities/TaskEntity";
import { useDeleteTask } from "../hooks/useDeleteTask";

function TaskCard(props: TaskEntity) {
  const { onDelete } = useDeleteTask(props.id);

  return (
    <>
      <div
        key={props.id}
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          // display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <Link to={`/task/${props.id}`} style={{ textDecoration: "none" }}>
          <div style={{ width: "100%" }}>
            <p style={{ color: "black" }}>Title : {props.title}</p>
            <p style={{ color: "black" }}>Description : {props.description}</p>
            <p style={{ color: "black" }}>
              Status : {props.isCompleted ? "Completed" : "Not Completed"}
            </p>
          </div>
        </Link>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link
            to={`update/task/${props.id}`}
            style={{ textDecoration: "none", width: "50%" }}
          >
            <button style={{ width: "100%" }}>Update</button>
          </Link>
          <button style={{ width: "50%" }} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
