import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../redux/todosSlice";

export function TaskList() {
    const dispatch = useDispatch()
    const taskCard = useSelector((state) => state.task)

    return (
        <>
            <h1>Lista de tareas</h1>
            <input
                type='text'
                onChange={(e) => dispatch(addTask(e.target.value))}
            />
        </>

    )
}