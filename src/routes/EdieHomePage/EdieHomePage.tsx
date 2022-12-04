import { Container } from 'components/common-styled/common';
import Navbar from 'components/interior/Navbar';
import { useState } from 'react';
import {
  PaddedContainer,
  Image,
  SectionHeading,
  SubHeading,
  Mission,
  MissionAction,
  ServiceCard,
  ServiceContainer,
  ServiceCardIconContainer,
  ServiceCardTitle,
  ProductsContainer,
} from './styles';

type ServiceType = { bg: string; icon: string; title: string; content: string };
type ProductType = { category: string; img: string; name: string };

const Service: React.FC<{ service: ServiceType }> = ({ service }) => {
  return (
    <ServiceCard>
      <ServiceCardIconContainer color={service.bg}>
        <span className="material-symbols-outlined">{service.icon}</span>
      </ServiceCardIconContainer>
      <ServiceCardTitle>{service.title}</ServiceCardTitle>
      <p>{service.content}</p>
      <button>Get started</button>
    </ServiceCard>
  );
};

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <>
      <img src={`/images/eddit/${product.img}`} />
    </>
  );
};

const EdieHomePage = () => {
  const [services] = useState<ServiceType[]>([
    {
      bg: '#2D9CDB',
      icon: 'edit',
      title: 'UX/UX Design',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
    },
    {
      bg: '#27AE60',
      icon: 'code',
      title: 'Front End',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
    },
    {
      bg: '#EB5757',
      icon: 'storage',
      title: 'Back End',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
    },
  ]);
  const [products] = useState<ProductType[]>([
    {
      img: 'smarthome.jpg',
      category: 'Full stack application',
      name: 'Smart home dashboard',
    },
    {
      img: 'onboard.png',
      category: 'UX/UI design',
      name: 'Onboard application',
    },
    {
      img: 'booking.png',
      category: 'Mobile Application',
      name: 'Booking system',
    },
    {
      img: 'juicy-product.png',
      category: 'Front End application',
      name: 'Juice product homepage',
    },
  ]);
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
      <PaddedContainer>
        <SubHeading>Unhappy with your website?</SubHeading>
        <SectionHeading>
          We create beautiful and fast web services
        </SectionHeading>
      </PaddedContainer>

      <Image src="images/eddie/heroImage.jpg" alt="hero_image" />

      <PaddedContainer>
        <SectionHeading>Story, emotion and purpose</SectionHeading>
        <Mission>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </Mission>
        <MissionAction>
          <p>Want us to contact you?</p>
          <div>
            <input type="text" placeholder="Email" />
            <button>Join</button>
          </div>
        </MissionAction>
      </PaddedContainer>

      <PaddedContainer>
        <SectionHeading>We offer high demand services</SectionHeading>
        <ServiceContainer>
          {services.map((service) => (
            <Service service={service} />
          ))}
        </ServiceContainer>
      </PaddedContainer>

      <PaddedContainer>
        <SectionHeading>Good design means good business</SectionHeading>
        <ProductsContainer>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </ProductsContainer>
      </PaddedContainer>
    </Container>
  );
};
export default EdieHomePage;
