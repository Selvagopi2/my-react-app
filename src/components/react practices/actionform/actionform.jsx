import AddTask from "./components/react practices/actionform/AddTask";
import TaskList from "./components/react practices/actionform/TaskList";
import { TasksProvider } from "./components/react practices/actionform/TasksContext";

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day Off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
