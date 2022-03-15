import { useEffect, useState } from 'react'
//import '../App.css'
import Button from '../Components/Button'
import Text from '../Components/Text'
import { TextField } from '../Components/TextField'
import { useNavigate } from 'react-router-dom'
import { login } from '../Api/Auth'

function Login() {
  let navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  async function signIn() {
    try {
      const credentials = await login(user, password)
      console.log(JSON.stringify(credentials))
      localStorage.setItem('rea-jwtToken', credentials.user.token)
      navigate('home', { replace: true })
    } catch (error) {
      //Log errors
    }
  }

  function handleSubmit(event: React.FormEvent) {
    if (password.length == 0 && user.length == 0) {
      alert('Insert username and password')
    } else {
      //navigate('home', { replace: true })
      signIn()
    }
    event.preventDefault()
  }

  useEffect(() => {
    if ((localStorage.getItem('rea-jwtToken')?.length || '') > 0) {
      navigate('info', { replace: true })
    }
  }, [])

  return (
    <div className="App">
      <form>
        <p>
          <Text>Insert your credentials</Text>
        </p>
        <p>
          <TextField
            text={user}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser(e.target.value)
            }
          />
        </p>
        <p>
          <TextField
            text={password}
            type="password"
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </p>
        <p>
          <Button type="submit" handler={handleSubmit}>
            Login
          </Button>
        </p>
      </form>
    </div>
  )
}

export default Login
