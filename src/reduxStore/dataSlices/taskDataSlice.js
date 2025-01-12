import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchTaskData = createAsyncThunk('taskData/fetchData',
    async (_, thunkApi) => {
        try {
            const response = await fetch('/Data/tasks.json')
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

const TaskSlice = createSlice({
    name: "taskData",
    initialState: {
        data: [],
        status: 'initial',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskData.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchTaskData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchTaskData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
})


export default TaskSlice.reducer;