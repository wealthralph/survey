import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "idle",
  error: null,
  token: null,
};

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axios.get("/api/current_user");
  return response.data;
});

export const handleToken = createAsyncThunk(
  "auth/stripe",
  async (token) => {
    const response = await axios.post("/api/stripe", token);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload || false;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(handleToken.fulfilled, (state, action) => {
      console.log(action)
      return state.user
    });
  },
});

export const selectUser = (state) => state.auth.user;
export const UserStatus = (state) => state.auth.status;

export default authSlice.reducer;
