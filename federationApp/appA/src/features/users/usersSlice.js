import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'counter/fetchUsers',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        return data;
    }
)

const initialState = { users: [] }

const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
        state.users = action.payload
    },
    [fetchUsers.pending]: (state, action) => {
        state.users = [{name: 'загрузка', id: 1}]
    }
  }
})

export const { addUsers } = usersSlice.actions
export default usersSlice.reducer