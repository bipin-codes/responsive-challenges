import {
  BaseRow,
  LeftHeader,
  MemberImage,
  MemberName,
  MemberPosition,
  RightHeader,
  RightHeaderContainer,
  RightHeaderContent,
  StyledContainer,
  TeamCard,
  TeamGrid,
} from "./styles";

const teamInfo = [
  {
    image: "images/team/photo1.png",
    name: "Bill Mahoney",
    position: "Product Owner",
  },
  {
    image: "images/team/photo2.png",
    name: "Saba Cabrera",
    position: "Art Director",
  },
  {
    image: "images/team/photo3.png",
    name: "Shae le",
    position: "Tech Lead",
  },
  {
    image: "images/team/photo4.png",
    name: "Skylah lu",
    position: "UX Designer",
  },
  {
    image: "images/team/photo5.png",
    name: "Griff Richards",
    position: "Developer",
  },
  {
    image: "images/team/photo6.png",
    name: "Stan John",
    position: "Developer",
  },
];

const Teams: React.FC = () => {
  return (
    <StyledContainer>
      <BaseRow>
        <LeftHeader>The creative crew</LeftHeader>
        <RightHeaderContainer>
          <RightHeader>Who we are</RightHeader>
          <RightHeaderContent>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </RightHeaderContent>
        </RightHeaderContainer>
      </BaseRow>
      <TeamGrid>
        {teamInfo.map((info) => (
          <TeamCard>
            <div>
              <MemberImage src={info.image}></MemberImage>
              <MemberName>{info.name}</MemberName>
            </div>
            <MemberPosition>{info.position}</MemberPosition>
          </TeamCard>
        ))}
      </TeamGrid>
    </StyledContainer>
  );
};
export default Teams;
