'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  collectionId: number
  title: String
  // token: any
  dashboardData: any
  tokenId: number
}

const initialState: CounterState = {
  collectionId: 0,
  title: '',
  // token: '',
  dashboardData: '',
  tokenId: 0,
}

export const counterSlice = createSlice({
  name: 'collectionId',
  initialState,
  reducers: {
    updateCOllectionId: (state, action) => {
      state.collectionId = action.payload
    },
    updateTitle: (state, action) => {
      state.title = action.payload
    },
    // updateToken: (state, action) => {
    //   state.token = action.payload
    // },
    updateDashboard: (state, action) => {
      state.dashboardData = action.payload
    },
    updateTokenId: (state, action) => {
      state.tokenId = action.payload
    },
  },
})

export const {
  updateCOllectionId,
  updateTitle,
  // updateToken,
  updateDashboard,
  updateTokenId,
} = counterSlice.actions

export default counterSlice.reducer
