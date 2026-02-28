import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userList } from '../../../apis/apiEndPoints';

export const fetchuserList = createAsyncThunk('users/fetchuserList', async (params, { rejectWithValue }) => {
    try {
        const response = await userList({ params });
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
}
);

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        count: 0,
        loading: false,
        error: null,
    },
    reducers: {
        clearUsers: (state) => {
            state.users = [];
            state.count = 0;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchuserList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchuserList.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action?.payload?.data || [];
                state.count = action?.payload?.count || 0;
                state.error = null;
            })
            .addCase(fetchuserList.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.count = 0;
                state.error = action.payload?.message || 'Failed to fetch roles';
            });
    },
});

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;