import { FC } from "react";
import { tUsersData } from "../../App";


interface iUserProps {
  userData: tUsersData
  isInvited: boolean
  onClickInvites: (id: number) => void
}

export const User:FC<iUserProps> = ({userData, onClickInvites, isInvited}) => (
  <li>
    <div>
      <img className="avatar" src={userData.avatar} alt="User" />
      <div>
        <h3>{`${userData.first_name} ${userData.last_name}`}</h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {userData.email}
        </p>
      </div>
    </div>
    <img onClick={() => onClickInvites(userData.id)} className="action" src={`/assets/${isInvited ? 'minus' : 'plus'}.svg`} alt="Action" />
  </li>
);
