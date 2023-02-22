import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getUser = () => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((users) => {
        let findUser = users.find((user) => (user.id == id));
        setUser(findUser);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <img src={user.image} height={250} width={250} style={{borderRadius: '50%', objectFit: 'cover', border: '5px solid red'}} />
        <div>
          <p style={{textAlign: 'center'}}>@{user.username}</p>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            <div>
                <p style={{textAlign: 'center'}}>{user.follower}</p>
                <p>Followers</p>
            </div>
            <div>
                <p style={{textAlign: 'center'}}>{user.following}</p>
                <p>Following</p>
            </div>
          </div>
        </div>
        <div style={{padding: '2em'}}>
          <Link style={{backgroundColor: 'white', color: 'gray', padding: '0 1.5em', textDecoration: 'none', border: '.2em solid blue', borderRadius: '10px'}} to={"/"}>Back</Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
