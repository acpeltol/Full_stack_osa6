import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        notificationChange(state, action) {
            return action.payload
        },
        clearNotification() {
            return ""
        }
    },
})

export const setNotification = (content, time) => {
    console.log(content, time)
    return async dispatch => {
    dispatch(notificationChange(content))
    setTimeout(() => {
    dispatch(clearNotification())
    }, time * 1000)
    }
  }

export const { notificationChange, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer