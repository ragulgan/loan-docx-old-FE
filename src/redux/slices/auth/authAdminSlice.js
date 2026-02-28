import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdmin } from "../../../apis/apiEndPoints";

export const login = createAsyncThunk('login/admin', async (credentials, thunkAPI) => {
    try {
        const response = await loginAdmin(credentials);
        return response?.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: localStorage.getItem('adminInfo'),
        status: 'idle',
        error: null,
        message: '',
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('adminInfo');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.token = action?.payload?.data;
                localStorage.setItem('adminInfo', JSON.stringify(action?.payload?.data));
                state.user = action?.payload?.data;
                state.message = action?.payload?.data?.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action?.payload;
                state.message = action?.payload?.data?.message || 'Something went wrong.';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
