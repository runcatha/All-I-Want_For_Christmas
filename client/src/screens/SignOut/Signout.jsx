import { useEffect } from 'react'
import { removeToken } from '../../services/auth'
import { useHistory } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await removeToken()
      setUser(null)
      history.push('/')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default SignOut