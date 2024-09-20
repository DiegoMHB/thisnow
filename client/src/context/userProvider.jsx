import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import data from "../mockData/mock-users.json";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [userId,setUserId] = useState('');

  const userId = ("3"); //ill need to get the id of the user


  useEffect(() => {
    for (let user of data.users) {

      if (user.userId === userId) {
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
  }, []);


  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
