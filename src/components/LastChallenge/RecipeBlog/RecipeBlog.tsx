import React from 'react';
import { Default, Image, Root } from '../common/styles';
import {
  ActionButton,
  Content,
  ActionContainer,
  Tags,
  Title,
  Description,
} from './styles';

const RecipeBlog = () => {
  return (
    <Default>
      <Root>
        <Image src="/images/checkout/photo1.png" alt="recipe" />
        <Content>
          <Tags>
            <span>#HTML</span>
            <span>#CSS</span>
            <span>#responsive</span>
          </Tags>
          <Title>Recipe Blog</Title>
          <Description>
            In this project, I work with HTML and CSS to create a responsive
            page . The design is from devchallenge.io. Donec aliquam est dui,
            vel vestibulum diam sollicitudin id. Quisque feugiat malesuada
            molestie.
          </Description>
          <ActionContainer>
            <ActionButton solid={true} type="button">
              Demo
            </ActionButton>
            <ActionButton solid={false} type="button">
              Code
            </ActionButton>
          </ActionContainer>
        </Content>
      </Root>
    </Default>
  );
};

export default RecipeBlog;
