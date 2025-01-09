import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    console.log(content)
    event.target.note.value = ''
    dispatch(createAnecdote(content))
    dispatch(notificationChange(`You added anecdote "${content}"`))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input name="note"/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm