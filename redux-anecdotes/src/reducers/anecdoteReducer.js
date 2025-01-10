import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action){

        const content = {
          content: action.payload,
          id: getId(),
          votes: 0
        }

        state.push(content)
    },
    giveVote(state, action){
      const ide = action.payload

        // eslint-disable-next-line no-case-declarations
      const amecdoteToChange = state.find(n => n.id === ide)
      // eslint-disable-next-line no-case-declarations
      const changedNote = { 
        ...amecdoteToChange, 
        votes: amecdoteToChange.votes + 1 
      }

      console.log(ide)

      return state.map(ancedote =>
        ancedote.id !== ide ? ancedote : changedNote 
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const obj = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(obj))
  }
}

export const voteAnecdote = content => {
  return async dispatch => {
    await anecdoteService.vote(content)
    dispatch(initializeAnecdotes())
  }
}


export const { createAnecdote, giveVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer