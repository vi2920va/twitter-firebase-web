import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../firebase";

const Profile = () => {
  const history = useHistory();

  const handleClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={handleClick}>Log out</button>
    </>
  );
};
export default Profile;
