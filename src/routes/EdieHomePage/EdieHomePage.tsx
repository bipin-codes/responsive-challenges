import { Container } from 'components/common-styled/common';
import Navbar from 'components/interior/Navbar';

const EdieHomePage = () => {
  return (
    <Container>
      <Navbar
        theme="light"
        title="Edie"
        menuItems={['Home', 'Services', 'Our Works', 'Clients', 'Contact']}
      />
    </Container>
  );
};
export default EdieHomePage;
