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

  .main {
    flex: 1;
  }
  .footer {
    height: 88px;
    border-top: 1px solid #e8e9ec;
    display: flex;
    justify-content: space-around;
  }
`;

S.SocialMedia = styled.div`
  .info {
    font-weight: 400;
    font-size: 10px;
    color: grey;
    letter-spacing: 1px;
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
        <div>
          <p>{profile.socialMedia.followers}</p>
          <S.InfoText>Followers</S.InfoText>
        </div>
        <div>
          <p>{profile.socialMedia.likes}</p>
          <S.InfoText>Likes</S.InfoText>
        </div>
        <div>
          <p>{profile.socialMedia.photos}</p>
          <S.InfoText>Photos</S.InfoText>
        </div>
      </div>
    </S.Card>
  );
};

export default ProfileCard;
