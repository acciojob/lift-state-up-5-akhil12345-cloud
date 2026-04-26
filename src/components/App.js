import React, { useState } from "react";
import "./../styles/App.css";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    
  };

  if (isLoggedIn) {
    return <h2>You are logged in</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <br/>
      <br/>
      <input type="password" placeholder="Password" />
      <br/>
      <br/>
      <button type="submit">Login</button>
    </form>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      <LoginForm
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default App;