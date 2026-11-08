import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodo, addTodo, updateStatus, editTodo, deleteTodo , setFilter } from "./Components/Slices/TodoSlice.jsx";


const App = () => {
  // const [Todos, setTodos] = useState([]);
  // const [Filter, setFilter] = useState("All");

  const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();

  const todo = useSelector((state)=>(state.todo.todos));

  const filters = useSelector((state)=>(state.todo.filter));

  // console.log(Filter)
  // const handleTodo = (name, desc) => {
  //   setTodos([
  //     ...Todos,
  //     { id: Date.now(), name: name, desc: desc, status: "Not Completed" },
  //   ]);
  // };

  // function UpdateStatus(TodoStatus, TodoId) {
  //   const arr = Todos.map((todo) =>
  //     todo.id === TodoId ? { ...todo, status: TodoStatus } : todo,
  //   );
  //   //  console.log(arr);
  //   setTodos(arr);
  // }

  // console.log(state);

  // function DeleteTodo(id) {
  //   const NewFilter = Todos.filter((todo) => todo.id !== id);
  //   setTodos(NewFilter);
  // }

  // function EditTodo(NewName, NewDesc, id) {
  //   setTodos(
  //     Todos.map((todo) =>
  //       todo.id === id ? { ...todo, name: NewName, desc: NewDesc } : todo,
  //     ),
  //   );
  // }

  const getTodohandler = async () => {
    try {
      setisLoading(true);
      const response = await axios.get("/Todo");
      console.log(response.data);

     dispatch(getTodo(response.data));

    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

     useEffect(() => {
       getTodohandler();
     }, []);


  const addTodohandler = async (todoData) => {
    try {
      const response = await axios.post("/Todo", {
        name: todoData.name,
        desc: todoData.desc,
        status: "Not Completed",
      });
      console.log(response.data);

      dispatch(addTodo(response.data))

    } catch (error) {
      console.log(error);
    }
  };

  const updateStatushandler = async (todoData) => {
    try {
      const response = await axios.put(`/Todo/${todoData.id}`, {
        status: todoData.status,
      });
      dispatch(updateStatus(response.data))

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editTodohandler = async (todoData) => {
    try {
    
      const response = await axios.put(`/Todo/${todoData.id}`, {
        name: todoData.name,
        desc: todoData.desc,
      });

       dispatch(editTodo(response.data))
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodohandler = async (todoId) => {

    try {
        
      const response = await axios.delete(`/Todo/${todoId}`);
        dispatch(deleteTodo(todoId));
       console.log("Delete todo",response.data)
  
    } catch (error) {
      console.log(error);
    }
  };

 

  const Filtered = todo.filter((filterTodo) => {
    if (filters === "All") return true; //{},{},{},{}
    return filterTodo.status === filters; //{},{}
  });
  console.log("Selected filter:", filters);
  console.log("Todos:", todo);
  

  return (
    <>
      <Header addTodo={addTodohandler} />
      {isLoading ? (
        <h2 className="load">Loading...</h2>
      ) : (
        <Main
          Todos={Filtered}
          filter={setFilter}
          Filter={filters}
          UpdateStatus={updateStatushandler}
          editTodo={editTodohandler}
          deleteTodo={deleteTodohandler}
        />
      )}
    </>
  );
};

export default App;
