import {useDispatch} from "react-redux";
import {deleteTask, toggleTask} from "./redux/redux";

const TaskItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id)) }
        />
        {task.text}


        <span
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
          onClick={() => dispatch(deleteTask(task.id)) }
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
