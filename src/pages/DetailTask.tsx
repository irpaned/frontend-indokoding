import { useParams } from "react-router-dom";
import { useDetailTask } from "../features/hooks/useDetailTask";

function DetailTaskPage() {
  const { id } = useParams<{ id: string }>();
  const numbericId = Number(id);
  const { tasks } = useDetailTask(numbericId);
  return (
    <>
      <div>Detail Task</div>
      <h3>Title : {tasks?.title}</h3>
      <p>Description : {tasks?.description}</p>
      <p>Status :{tasks?.isCompleted ? "Completed" : "Not Completed"}</p>
    </>
  );
}

export default DetailTaskPage;
