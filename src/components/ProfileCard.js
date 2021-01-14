import React, { useEffect, useState } from "react";
import { colors } from "../theme";
import styled from "@emotion/styled";

import bgCardImage from "../images/bg-pattern-card.svg";
import victorAvatar from "../images/image-victor.jpg";

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
  /* To keep images and cntent inside not overflow the border radius */
  overflow: hidden;
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
    display: flex;
    flex-direction: column;

    &__image {
      background-image: url(${bgCardImage});
      background-repeat: no-repeat, no-repeat;
      height: 140px;
      width: 100%;
    }
    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;
    }
  }
  .footer {
    height: 88px;
    border-top: 1px solid #e8e9ec;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
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

S.CityText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #6b7082;
  margin-top: 10px;
  margin-bottom: 28px;
`;

S.NameText = styled.h2`
  /* font-weight: bold; */
  margin-bottom: 0px;
  .age {
    padding-left: 8.5px;
    font-weight: 400;
    color: #6b7082;
  }
`;

S.Avatar = styled.div`
  background-image: url(${victorAvatar});
  background-repeat: no-repeat, no-repeat;
  height: 96px;
  width: 96px;
  border: 5px solid #ffffff;

  /* fill the container, preserving aspect ratio, and cropping to fit */
  background-size: cover;

  /* center the image vertically and horizontally */
  background-position: top center;
  border-radius: 50%;

  /* position */
  position: absolute;
  top: 0;
  transform: translateY(-50%);
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
        <div className="main__image"></div>
        <div className="main__info">
          <S.Avatar />
          <S.NameText>
            <span>{profile.name}</span>
            <span className="age">{profile.age}</span>
          </S.NameText>
          <S.CityText>{profile.city}</S.CityText>
        </div>
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
