import { configureStore } from "@reduxjs/toolkit";
import projectDataReducer from '../dataSlices/projectDataSlice'
import taskDataReducer from '../dataSlices/taskDataSlice'

const store = configureStore({
    reducer:{
        projectData:projectDataReducer,
        taskData:taskDataReducer
    }
})

export default store;