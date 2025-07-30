import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'home',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value +=1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})


export const { increment, decrement } = slice.actions

export default slice.reducer