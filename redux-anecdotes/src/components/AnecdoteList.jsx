import { useDispatch, useSelector } from 'react-redux'
//import { giveVote } from '../reducers/anecdoteReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const unSotedAnecdotes = useSelector(state => {
    console.log(state.anecdotes)
    return state.anecdotes.filter(anecdote => 
      anecdote.content.includes(state.filter)
    )
  })
  const dispatch = useDispatch()

  const vote = (content) => {
    console.log('vote', content.id)
    dispatch(voteAnecdote(content.id))
    dispatch(setNotification(`You gave vote for anecdote "${content.content}"`, 4))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
   </div>
)}

export default AnecdoteList