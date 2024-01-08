import TaskForm from "../components/TaskForm";
import Categories from "../components/Categories";

const MainPage = () => {
  return (
    <div className="home--page">
      <TaskForm />
      <Categories />
    </div>
  );
};

export default MainPage;
