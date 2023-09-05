import { FC, useEffect, useState } from "react";
import { Users } from "./components/Users";
// import { Success } from './components/Success';
import axios from "axios";

// Тут список пользователей: https://reqres.in/api/users

const App: FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data } = await axios.get("https://reqres.in/api/users");
        setUsers(data.data);
      } catch (error) {
        console.error("Ошибка при запросе:", error);
      }
    };

    FetchData();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <Users
        searchValue={searchValue}
        onChangeValue={handleChangeInput}
        items={users}
        isLoading={isLoading}
      />
      {/* <Success /> */}
    </div>
  );
};

export default App;
