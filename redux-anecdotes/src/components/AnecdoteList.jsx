import { useDispatch, useSelector } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const unSotedAnecdotes = useSelector(state => {
    console.log(state)
    return state.anecdotes.filter(anecdote => 
      anecdote.content.includes(state.filter)
    )
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(giveVote(id))
    dispatch(notificationChange(`You gave vote for anecdote with id "${id}"`))
  }

  const anecdotes = unSotedAnecdotes.slice().sort((a, b) => b.votes - a.votes)


  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
   </div>
)}

export default AnecdoteList