import { Container } from 'components/common-styled/common';
import Navbar from 'components/interior/Navbar';
import { HeadingContainer, SubHeading } from './styles';

const EdieHomePage = () => {
  return (
    <Container>
      <Navbar
        title="Edie"
        titleStyle={{
          color: '#333333',
          fontWeight: '800',
          fontSize: '2.25rem',
          fontFamily: 'Heebo',
        }}
        menuItems={['Home', 'Services', 'Our Works', 'Clients', 'Contact']}
        menuItemStyle={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '500',
          fontSize: '1.5rem',
          color: '#333333',
        }}
      />
      <HeadingContainer>
        <SubHeading>Unhappy with your website?</SubHeading>
      </HeadingContainer>
    </Container>
  );
};
export default EdieHomePage;
