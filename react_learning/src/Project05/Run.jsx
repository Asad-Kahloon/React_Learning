import Login from "./Login";
import Profile from "./Profile";
import UserContextProvider from "./context/UserContextProvider";

function Run() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default Run;
