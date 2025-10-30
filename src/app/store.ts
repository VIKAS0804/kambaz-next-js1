import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./Labs/Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./Labs/Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "./Labs/Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "./Labs/Lab4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});

export default store;