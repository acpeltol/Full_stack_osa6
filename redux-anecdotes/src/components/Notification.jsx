import { useSelector, useDispatch } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (notification !== "") {
      const timer = setTimeout(() => {
        dispatch(notificationChange(''))
      }, 5000)

      return () => clearTimeout(timer)
    }
    }, [notification, dispatch])

    if (notification === "") {
      return null
    }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification