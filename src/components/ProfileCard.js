import React, { useEffect, useState } from "react";
import { colors } from "../theme";
import styled from "@emotion/styled";

const mockedUser = {
  name: "Victor Crest",
  age: 26,
  city: "London",
  socialMedia: {
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
  },
};

const S = {};

S.Card = styled.section`
  background-color: #ffffff;
  max-width: 350px;
  height: 374px;
  @media (max-width: 375px) {
    max-width: 326px;
  }

  border-radius: 15px;
  box-shadow: 0px 4px 4px ${colors.darkBlue};
  /* TODO: filter not working ? */
  /* filter: box-shadow(1px 10px px ${colors.darkBlue}); */

  display: flex;
  flex-direction: column;

  /* center vertically without flexbox: */
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  /* center horizontally */
  margin: 0 auto;

  .main {
    flex: 1;
  }
  .footer {
    height: 88px;
    border-top: 1px solid #e8e9ec;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

S.SocialMedia = styled.div`
  /* background-color: red; */
  .label {
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #6b7082;
    letter-spacing: 1px;
    margin-top: 0px;
  }
  .numbers {
    font-weight: 800;
    margin-bottom: 9px;
    font-size: 18px;
    line-height: 18px;
    color: #2e3349;
  }
`;

S.InfoText = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: grey;
  letter-spacing: 1px;
`;

const ProfileCard = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProfile(mockedUser);
    setLoading(false);
  }, [userId]);

  if (loading) return <p>Loading ...</p>;
  return (
    <S.Card>
      <div className="main">
        <h1>Main</h1>
      </div>
      <div className="footer">
        <S.SocialMedia>
          <p className="numbers">{profile.socialMedia.followers}</p>
          <p className="label">Followers</p>
        </S.SocialMedia>
        <S.SocialMedia>
          <p className="numbers">{profile.socialMedia.likes}</p>
          <p className="label">Likes</p>
        </S.SocialMedia>
        <S.SocialMedia>
          <p className="numbers">{profile.socialMedia.photos}</p>
          <p className="label">Photos</p>
        </S.SocialMedia>
      </div>
    </S.Card>
  );
};

export default ProfileCard;
