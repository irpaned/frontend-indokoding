import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={{ padding: "50px" }}>
      <Outlet />
    </div>
  );
}

export default MainLayout;
