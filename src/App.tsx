import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Index from "./pages";
import DetailTaskPage from "./pages/DetailTask";
import UpdateTaskPage from "./pages/UpdateTaskPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="task/:id" element={<DetailTaskPage />} />
          <Route path="update/task/:id" element={<UpdateTaskPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
