import ContactForm from "components/Eddie/ContactForm/ContactForm";
import Product, { ProductType } from "components/Eddie/Product/Product";
import { ServiceType } from "components/Eddie/Service/types";
import Service from "components/Eddie/Service/Service";

import Navbar from "components/interior/Navbar";
import { useState } from "react";

import {
  PaddedContainer,
  Image,
  SectionHeading,
  SubHeading,
  Mission,
  ProductsContainer,
  Span,
  TeamContainer,
  TeamDetails,
  TeamGrid,
  TestimonialTitle,
  ClientDetail,
  MainContainer,
  Footer,
  StyledSpan,
  ServiceContainer,
} from "./styles";

const EdieHomePage = () => {
  const [services] = useState<ServiceType[]>([
    {
      bg: "#2D9CDB",
      icon: "edit",
      title: "UX/UX Design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
    {
      bg: "#27AE60",
      icon: "code",
      title: "Front End",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
    {
      bg: "#EB5757",
      icon: "storage",
      title: "Back End",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
  ]);
  const [products] = useState<ProductType[]>([
    {
      img: "smarthome.jpg",
      category: "Full stack application",
      name: "Smart home dashboard",
    },
    {
      img: "onboard.png",
      category: "UX/UI design",
      name: "Onboard application",
    },
    {
      img: "booking.png",
      category: "Mobile Application",
      name: "Booking system",
    },
    {
      img: "juice-product.png",
      category: "Front End application",
      name: "Juice product homepage",
    },
  ]);
  return (
    <div style={{ background: "#100E1D" }}>
      <MainContainer>
        <Navbar
          breakAt="1100px"
          theme="light"
          title="Edie"
          titleStyle={{
            color: "#333333",
            fontWeight: "800",
            fontSize: "2.25rem",
            fontFamily: "Heebo",
          }}
          menuItems={["Home", "Services", "Our Works", "Clients", "Contact"]}
          menuItemStyle={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "1.5rem",
            color: "#333333",
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
          <ContactForm />
        </PaddedContainer>

        <PaddedContainer>
          <SectionHeading>We offer high demand services</SectionHeading>
          <ServiceContainer>
            {services.map((service, idx) => (
              <Service service={service} key={idx} />
            ))}
          </ServiceContainer>
        </PaddedContainer>

        <PaddedContainer>
          <SectionHeading>Good design means good business</SectionHeading>
          <ProductsContainer>
            {products.map((product, idx) => (
              <Product product={product} key={idx} />
            ))}
          </ProductsContainer>

          <Span>
            see more <StyledSpan>arrow_forward</StyledSpan>
          </Span>
        </PaddedContainer>
        <PaddedContainer>
          <TeamContainer>
            <TeamDetails>
              <SubHeading>Meet the team</SubHeading>
              <SectionHeading>We are chilled and laidback</SectionHeading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </TeamDetails>
            <TeamGrid>
              <img src={`/images/eddie/person3.png`} alt={"person3"} />
              <img src={`/images/eddie/person1.png`} alt={"person1"} />
              <img src={`/images/eddie/person2.png`} alt={"person2"} />
            </TeamGrid>
          </TeamContainer>
        </PaddedContainer>
        <PaddedContainer>
          <TestimonialTitle>
            “Fast and outstanding resutls. Edie understands their customer’s
            needs. They have a young and talented team.”
          </TestimonialTitle>
          <ClientDetail>
            <img src={"/images/eddie/person4.png"} alt="person 4" />
            <div>
              <p>Carlos Tran</p>
              <p>The Decorate Gatsby</p>
            </div>
          </ClientDetail>
        </PaddedContainer>
      </MainContainer>
      <Footer>
        <ul>
          {["Home", "Services", "Our Works", "Clients", "Contact"].map(
            (item, idx) => (
              <li key={idx}>{item}</li>
            )
          )}
        </ul>
        <div>
          <p>Edie</p>
          <div>
            <img src="images/eddie/instagram.svg" alt="instagram" />
            <img src="images/eddie/linkedin.svg" alt="linkedin" />
            <img src="images/eddie/twitter.svg" alt="twitter" />
          </div>
        </div>
        <ContactForm />
      </Footer>
    </div>
  );
};
export default EdieHomePage;
