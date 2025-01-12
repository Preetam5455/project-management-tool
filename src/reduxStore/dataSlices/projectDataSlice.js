import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchprojectData = createAsyncThunk('projectData/fetchData',
    async (_, thunkApi) => {
        try {
            const response = await fetch('./Data/projects.json')
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

const projectSlice = createSlice({
    name: "projectData",
    initialState: {
        data: [],
        status: 'initial',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchprojectData.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchprojectData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchprojectData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
})


export default projectSlice.reducer;