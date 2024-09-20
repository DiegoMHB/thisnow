import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import data from "../mockData/mock-users.json";

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [id, setId] = useState('');

  useEffect(() => {
    for (let user of data.users) {
      if (user.userId === id) {
        const el = {
          userId: user.userId,
          username: user.username,
          posts: user.posts,
          details: user.details,
          profile_picture: user.profile_picture,
          dateLogin: user.dateLogin
        };
        setUser(el);
      }
    }
  }, [id])


  return (
    <UserContext.Provider
      value={{
        user,
        setId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
