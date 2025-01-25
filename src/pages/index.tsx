import InputAddTask from "../features/component/InputAddTask";
import TaskCard from "../features/component/TaskCard";
import { useProduct } from "../features/hooks/useTask";

function Index() {
  const { tasks } = useProduct();

  const isTasksEmpty = Array.isArray(tasks) && tasks.length === 0;

  return (
    <>
      <h1>Add Task</h1>
      <InputAddTask />
      <h1>Task List</h1>
      {isTasksEmpty ? (
        <p style={{ fontSize: "20px" }}>Task list is empty</p>
      ) : (
        Array.isArray(tasks) &&
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      )}
    </>
  );
}

export default Index;
