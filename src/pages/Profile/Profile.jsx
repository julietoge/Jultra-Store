import React from "react";
import { useAuth } from "../../components/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};

export default Profile;
