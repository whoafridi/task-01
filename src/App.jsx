import Header from "./components/Header";
import { TaskProvider } from "./context/TaskProvider";
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <TaskProvider>
        <TaskBoard />
      </TaskProvider>
    </>
  );
};

export default App;
