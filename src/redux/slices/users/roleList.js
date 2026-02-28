import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { roleList } from '../../../apis/apiEndPoints';

export const fetchRoleList = createAsyncThunk('role/fetchRoleList', async (params, { rejectWithValue }) => {
    try {
        const response = await roleList({ params });
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
}
);

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        roles: [],
        count: 0,
        loading: false,
        error: null,
    },
    reducers: {
        clearRoles: (state) => {
            state.roles = [];
            state.count = 0;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoleList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRoleList.fulfilled, (state, action) => {
                state.loading = false;
                state.roles = action?.payload?.data || [];
                state.count = action?.payload?.count || 0;
                state.error = null;
            })
            .addCase(fetchRoleList.rejected, (state, action) => {
                state.loading = false;
                state.roles = [];
                state.count = 0;
                state.error = action.payload?.message || 'Failed to fetch roles';
            });
    },
});

export const { clearRoles } = roleSlice.actions;
export default roleSlice.reducer;