import React from 'react';
import { Default, Root, Image } from '../common/styles';
import {
  Contact,
  ContactItem,
  Details,
  NameAndTag,
  PersonDescription,
  PersonDetail,
  StyledSpan,
} from './styles';
const Profile: React.FC = () => {
  return (
    <Default>
      <Root>
        <Image src="/images/eddie/person1.png" alt="person" />

        <Details>
          <PersonDetail>
            <NameAndTag>
              <p>Billy Pearson</p>
              <p>Front-end developer</p>
            </NameAndTag>
            <Contact>
              <ContactItem>
                <StyledSpan>mail</StyledSpan>
                <span>billy@example.com</span>
              </ContactItem>
              <ContactItem>
                <StyledSpan>call</StyledSpan>
                <span>(+603) 546 624 342</span>
              </ContactItem>
            </Contact>
          </PersonDetail>
          <PersonDescription>
            <p>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </p>
            <p>
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>
          </PersonDescription>
        </Details>
      </Root>
    </Default>
  );
};
export default Profile;
