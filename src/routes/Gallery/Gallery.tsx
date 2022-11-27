import React from "react";
import {
  ImageGrid,
  ProfileCard,
  ProfileInfo,
  ProfileInfoContainer,
  StyledContainer,
} from "./styles";
const Gallery = () => {
  return (
    <StyledContainer>
      <ProfileCard>
        <img src={"images/gallery/profilePhoto.png"} alt="profile" />
        <p>Rodney Cotton</p>
        <p>Helsinki, Finland</p>

        <ProfileInfoContainer>
          {[
            { label: "Posts", value: "100" },
            { label: "Followers", value: "2,242" },
            { label: "Following", value: "1,432" },
          ].map(({ label, value }, idx) => (
            <ProfileInfo key={idx}>
              <p>{value}</p>
              <p>{label}</p>
            </ProfileInfo>
          ))}
        </ProfileInfoContainer>
      </ProfileCard>
      <ImageGrid>
        <img src="images/gallery/photo1.png" alt="1" />
        <img src="images/gallery/photo2.png" alt="2" />
        <img src="images/gallery/photo3.png" alt="3" />
        <img src="images/gallery/photo_4.png" alt="4" />
        <img src="images/gallery/photo5.png" alt="5" />
        <img src="images/gallery/photo6.png" alt="6" />
      </ImageGrid>
    </StyledContainer>
  );
};

export default Gallery;
