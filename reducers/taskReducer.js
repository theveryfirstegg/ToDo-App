
const initialState = []

export default taskReducer = (state = initialState, action) => {
    switch(action.type){
        case 'addTaskList':
            return [...state, action.payload]
            
        case 'addTask':
            
            return state.map((taskList) => 
                taskList.name === action.payload.listName ? 
                {...taskList, tasks:[...taskList.tasks, action.payload.newTask] } : taskList
            )

        case 'removeTask':
         
            return state.map((taskList) => taskList.name === action.payload.listName ? 
            {...taskList, tasks: taskList.tasks.filter((task) => task !== action.payload.targetTask)} : taskList)
            
        default: return state;

    }
}

