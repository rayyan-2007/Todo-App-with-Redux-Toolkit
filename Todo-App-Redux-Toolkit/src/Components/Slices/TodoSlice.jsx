import { createSlice } from "@reduxjs/toolkit"
const TodoSlice = createSlice({
     
       name: "todo",

     initialState:{
        todos: [],
        filter: "All"
     },
    
 reducers:{
             getTodo: (state,action)=>{
                   state.todos = action.payload;
             },

             addTodo: (state,action)=>{
                      state.todos = [
                        ...state.todos,
                        action.payload
                     ]  ;    
             },

             updateStatus: (state,action)=>{
                  state.todos =  state.todos.map((todo)=>
                       todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
                    );
             },

             editTodo: (state ,action)=>{
                  state.todos =   state.todos.map((todo)=>
                      todo.id === action.payload.id ? {...todo, name:action.payload.name, desc:action.payload.desc }: todo
                    );
             },

             deleteTodo: (state, action)=>
             {
                 state.todos = state.todos.filter((todo)=>
                        todo.id !== action.payload
                    );
                  },


            setFilter: (state, action)=>{
               state.filter = action.payload
                       
            }             
    }
})

export const {
    getTodo,
    addTodo,
    editTodo,
    deleteTodo,
    updateStatus,
    setFilter
} = TodoSlice.actions;

export default TodoSlice.reducer;

