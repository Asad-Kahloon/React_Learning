import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provier value={{ user, setUser }}>
      {children}
    </UserContext.Provier>
  );
};

export default UserContextProvider;
