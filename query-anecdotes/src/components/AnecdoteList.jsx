import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAnecdote } from '../requests'

// eslint-disable-next-line react/prop-types
const AnecdoteList = ({ anecdotes }) => {
  const queryClient = useQueryClient()

  console.log(anecdotes, 'Johan')
  
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: async () => {
      console.log('alles kla')
      await queryClient.invalidateQueries( {queryKey: ['anecdotes']})
    },
    onError: (error) => {
        console.log('Mutation error:', error)
      },
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1 })
  }

  return (
    <div>
      {
      // eslint-disable-next-line react/prop-types
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList