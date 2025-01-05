import { useDispatch, useSelector } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const unSotedAnecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(giveVote(id))
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