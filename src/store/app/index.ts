/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state'
import { REDUCERS } from './reducers'


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {...REDUCERS}
})

export const app = appSlice
