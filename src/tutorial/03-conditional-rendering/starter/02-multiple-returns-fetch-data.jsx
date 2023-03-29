import { useEffect, useState } from "react";

const url = "https://api.github.com/users/davidproberts";

const MultipleReturnsFetchData = () => {
  // convention to setup booleans with isSomething
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  // Destructure the user object to get the necessary properties
  const { avatar_url, login, company, bio } = user;

  return (
    <section>
      <h2>Fetch Data</h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={login}
      />
      <div>
        <h3>{login}</h3>
        <h4>Works At {company}</h4>
        <h5>{bio}</h5>
      </div>
    </section>
  );
};

export default MultipleReturnsFetchData;
