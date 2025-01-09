import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notifactionReducer from './reducers/notificationReducer'

// const reducer = combineReducers({
//     anecdotes: anecdoteReducer,
//     filter: filterReducer
//   })

// const store = createStore(reducer)

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notifactionReducer
    }
})

export default store