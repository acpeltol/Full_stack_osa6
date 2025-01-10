import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content : content,
    votes : 0
  }

  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async ( id ) => {
    const user = await axios.get(`${baseUrl}/${id}`) 
    console.log(user.data, 'olbor')
    const uptadetUser = {
        content: user.data.content,
        id : id,
        votes: user.data.votes + 1
    }

    const result = await axios.put(`${baseUrl}/${id}`, uptadetUser)

    return result.data
}

export default { getAll, createNew, vote }