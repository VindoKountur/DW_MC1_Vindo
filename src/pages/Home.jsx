import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const fetchData = () => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => navigate(`/detail/${user.id}`)}
          style={{ backgroundColor: "gray", display: "flex", gap: "20px", marginBottom: '20px', color: 'white', cursor: 'pointer', alignItems:'center', padding: '0.5em' }}
        >
          <img src={user.image} height={100} width={100} alt="" style={{borderRadius: '50%', objectFit: 'cover'}}  />
          <div>
            <p>@{user.username}</p>
            <p>Followers : {user.follower}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
