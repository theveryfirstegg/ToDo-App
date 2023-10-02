import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { legacy_createStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/allReducers';


export const addTaskList = (newTaskList) => {
    return {
        type: 'addTaskList',
        payload: newTaskList
    }
}

export const addTask = (newTask, listName) => {
    return {
        type: 'addTask',
        payload: {newTask: newTask, listName: listName}
    }
}

export const removeTask = (targetTask, listName) => {
    return {
        type: 'removeTask',
        payload: {targetTask, listName}
    }
}

const store = legacy_createStore(rootReducer)

export default store


