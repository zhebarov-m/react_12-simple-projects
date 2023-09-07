import { FC, useEffect, useState } from "react";
import { Users } from "./components/Users";
// import { Success } from './components/Success';
import axios from "axios";

// Тут список пользователей: https://reqres.in/api/users
export type tUsersData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const App: FC = () => {
  const [users, setUsers] = useState<tUsersData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState<number[]>([]);
  console.log(invites);
  

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickInvites = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
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
        invites={invites}
        onClickInvites={onClickInvites}
      />
      {/* <Success /> */}
    </div>
  );
};

export default App;
