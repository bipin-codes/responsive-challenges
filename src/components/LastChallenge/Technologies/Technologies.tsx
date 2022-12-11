import React, { useState } from 'react';
import { Default } from '../common/styles';
import { Content, StyledRoot, TechGrid, Title } from './styles';

type ITech = { name: string; percentage: string };

const Tech: React.FC<{ tech: ITech }> = ({ tech }) => {
  return <div>{tech.name}</div>;
};

const Technologies = () => {
  const [tech] = useState<ITech[]>([
    { name: 'React', percentage: '70%' },
    { name: 'Javascript', percentage: '80%' },
    { name: 'CSS', percentage: '90%' },
    { name: 'Vue', percentage: '60%' },
    { name: 'Redux', percentage: '80%' },
    { name: 'React Native', percentage: '90%' },
  ]);

  return (
    <Default>
      <StyledRoot>
        <Content>
          <Title>FRONT END</Title>
          <TechGrid>
            {tech.map((t, k) => (
              <Tech tech={t} key={k} />
            ))}
          </TechGrid>
        </Content>
      </StyledRoot>
    </Default>
  );
};

export default Technologies;
