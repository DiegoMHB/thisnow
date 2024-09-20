import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import data from "../mockData/mock-users.json";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const userId = "103"; //ill need to get the id of the user

  useEffect(() => {
    for (let user of data.users) {
      if (data.users.userId === userId) {
        const el = {
          userId: user.userId,
          username: user.username,
          postId: user.postId,
          details: user.details,
          profile_picture: user.profile_picture,
        };
        setUser([...el]);
      }
      console.log(user);
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
