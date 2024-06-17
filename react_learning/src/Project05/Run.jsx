import UserContextProvider from "./context/UserContextProvider";

function Run() {
  return (
    <UserContextProvider>
      React is important
      <h1>hii</h1>
    </UserContextProvider>
  );
}

export default Run;
