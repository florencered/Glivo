import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css";
import Loader from "../../Components/Layout/Loader/Loader";

const Profile = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    } else {
      navigate("/account");
    }
    // console.log(user.user && user.user.avatar);
  }, [navigate, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="profileContainer">
          <div>
            <h1>My Profile</h1>
            <img
              src={isAuthenticated ? user.user.avatar.url : "/Profile.png"}
              alt={isAuthenticated ? user.user.name : "Blank"}
            />
            <Link to="/me/update">Edit Profile</Link>
          </div>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>{isAuthenticated ? user.user.name : " "}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{isAuthenticated ? user.user.email : " "}</p>
            </div>
            <div>
              <h4>Joined On</h4>
              <p>
                {isAuthenticated
                  ? String(user.user.createdAt).substr(0, 10)
                  : ""}
              </p>
            </div>

            <div>
              <Link to="/orders">My Orders</Link>
              <Link to="/password/update">Change Password</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
