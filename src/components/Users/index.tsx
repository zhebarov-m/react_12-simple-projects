import { FC } from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";
import { tUsersData } from "../../App";

interface iUsersProps {
  items: tUsersData[];
  isLoading: boolean;
  searchValue: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invites: number[];
  onClickInvites: (id: number) => void;
}

export const Users: FC<iUsersProps> = (props) => {
  const {
    items,
    isLoading,
    searchValue,
    onChangeValue,
    invites,
    onClickInvites,
  } = props;

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) => {
              const fullName = `${item.first_name} ${item.last_name}`;
              return fullName.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((item) => (
              <User
                onClickInvites={onClickInvites}
                isInvited={invites.includes(item.id)}
                key={item.id}
                userData={item}
              />
            ))}
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};
