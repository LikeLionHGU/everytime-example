import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profile from "../../../assets/profile.png";
import { Link, withRouter } from "react-router-dom";
import axiosInstance, { endpoints } from "../../../axios";

const ProfileImage = styled.img`
  width: 76px;
  height: 76px;
  margin: 24px 0px 4px 0px;
  border-radius: 6px;
`;
const Nickname = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;
const ProfileID = styled.div`
  color: #999;
  font-size: 13px;
  line-height: 20px;
`;

const UserProfile = function (props) {
  const [User, setUser] = useState({
    userId: "",
    userNickname: "",
    userSchool: "",
  });
  const { userId, userNickname, userSchool } = User;

  useEffect(() => {
    const userFrom = localStorage.getItem("userId");
    axiosInstance
      .get(`${endpoints.user.profile}`)
      .then((response) => {
        setUser({
          userId: response.data.username,
          userNickname: response.data.nickname,
          userSchool: response.data.collegeName,
        });
        window.localStorage.setItem("userNickname", response.data.nickname);
      });
  }, []);

  if (props.boardPage) {
    return (
      <div>
        <Link to="/MyPage">
          <ProfileImage src={profile} alt="profile"></ProfileImage>
        </Link>
        <Nickname>{userNickname}</Nickname>
        <ProfileID>{userId}</ProfileID>
        <ProfileID>{userSchool}</ProfileID>
      </div>
    );
  }
};

export default withRouter(UserProfile);
