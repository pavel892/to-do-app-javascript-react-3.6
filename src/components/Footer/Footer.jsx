import './Footer.css';
import './../TasksFilter/TasksFilter';
import TasksFilter from './../TasksFilter/TasksFilter';

export default function Footer({ tasksCount, onDeleteCompletedTasks, filterTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter onFilterTasks={filterTasks} />
      <button onClick={onDeleteCompletedTasks} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
