
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authAdminSlice";
import roleReducer from "./slices/users/roleList";
import usersReducer from "./slices/users/userList"
const store = configureStore({
  reducer: {
    auth: authReducer,
    //role list
    role: roleReducer,
    //user list 
    user: usersReducer,
  },
});

export default store;