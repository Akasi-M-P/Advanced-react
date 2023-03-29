import { useState } from "react";

const UserChallenge = () => {
  const [User, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Peter" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {User ? (
        <div>
          <h4>Welcome {User.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
