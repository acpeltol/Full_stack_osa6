import { configureStore } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'

import anecdoteReducer,{ appendAnecdote } from './reducers/anecdoteReducer'
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

anecdoteService.getAll().then(anecdotes =>
    anecdotes.forEach(anecdote => {
      store.dispatch(appendAnecdote(anecdote))
    })
  )

export default store