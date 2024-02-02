import React, { useState, useEffect } from "react";
import AppButton from "../../components/AppButton";

interface User {
  username: string; 
  email: string;
 
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {user.username}</p> 
      <p>Email: {user.email}</p>
      <AppButton path="/home" buttonLabel="Home" />
    </div>
  );
};