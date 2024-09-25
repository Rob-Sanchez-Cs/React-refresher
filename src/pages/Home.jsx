import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <Link key={user.id} to={`/users/${user.id}`}>
            <User
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
