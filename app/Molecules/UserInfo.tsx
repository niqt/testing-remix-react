import { useState, useEffect } from 'react'
//import '../App.css'
import Button from '../Components/Button'
import Text from '../Components/Text'
import { TextField } from '../Components/TextField'
import { getUserByName } from '../Api/UserApi'

function UserInfo() {
  const initialName = 'niqt'
  const [nick, setNick] = useState(initialName)
  const [name, setName] = useState('')

  async function fetchUser() {
    try {
      const user = await getUserByName(nick)
      setName(user.name)
    } catch (error) {
      //Log errors
    }
  }

  function handleSubmit(event: React.FormEvent) {
    if (nick.length == 0) {
      alert('Insert the nickname')
    } else {
      fetchUser()
    }
    event.preventDefault()
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="App">
      <form>
        <p>
          <Text>Insert your nick name</Text>
        </p>
        <p>
          <TextField
            text={nick}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNick(e.target.value)
            }
          />
        </p>
        <p>
          <Text>Your name is {name}</Text>
        </p>
        <p>
          <Button type="submit" handler={handleSubmit}>
            Search
          </Button>
        </p>
      </form>
    </div>
  )
}

export default UserInfo
