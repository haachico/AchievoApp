import "./index.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MainLayout from "./components/MainLayout";
import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import HomeLayout from "./components/HomeLayout";

const TaskGraph = lazy(() => import("./components/Chart"));
export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<MainPage />} />
              <Route
                path="graph"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <TaskGraph />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/:id" element={<TaskDetails />} />
          </Route>
        </Routes>
      </div>
    </DndProvider>
  );
}
