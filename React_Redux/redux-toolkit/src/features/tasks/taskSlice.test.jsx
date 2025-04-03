import { store } from "../../store";
import { addTask, deleteTask } from "./taskSlice";

console.log(store.dispatch(addTask("Hello World")));
console.log(store.dispatch(addTask("Hello Kishan")));
console.log(store.dispatch(addTask("Hello Coder")));
console.log(store.dispatch(deleteTask(0)));
console.log(store.getState());
