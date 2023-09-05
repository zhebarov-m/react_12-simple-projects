import { FC, useEffect, useState } from 'react'
import { Users } from './components/Users';
// import { Success } from './components/Success';
import axios from 'axios';

// Тут список пользователей: https://reqres.in/api/users

const App:FC = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const FetchData = async () => {
      try {
        const {data} = await axios.get('https://reqres.in/api/users')
        setUsers(data.data)
      } catch (error) {
        console.error('Ошибка при запросе:', error);
        
      }
    }

    FetchData()
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
      {/* <Success /> */}
    </div>
  );
}

export default App

