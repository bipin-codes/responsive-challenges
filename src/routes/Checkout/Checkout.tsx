import React, { useState } from "react";
import {
  InputField,
  SelectInput,
  Ack,
} from "components/Checkout/FormComponents/FormComponents";
import {
  StyledContainer,
  SubTitle,
  Title,
  FormRow,
  Form,
  Content,
  Cart,
  Product,
  ProductImage,
  ProductDetail,
} from "./styles";

const CartItem: React.FC<{
  discounted_price: string;
  price: string;
  name: string;
  image: string;
}> = ({ name, image, discounted_price, price }) => (
  <Product>
    <ProductImage src={image} alt={name} />
    <ProductDetail>
      <p>{name}</p>
      <div>
        <span>{discounted_price}</span>
        <span>{price}</span>
      </div>
      <div>
        <button type="button">-</button>
        <span>{1}</span>
        <button type="button">+</button>
      </div>
    </ProductDetail>
  </Product>
);

const Checkout = () => {
  const [cart] = useState([
    {
      name: "Vintage Backbag",
      discounted_price: "$54.99",
      price: "$94.99",
      image: "images/checkout/photo1.png",
    },
    {
      name: "Levi Shoes",
      discounted_price: "$74.99",
      price: "$124.99",
      image: "images/checkout/photo2.png",
    },
  ]);
  return (
    <StyledContainer>
      <Title>Checkout</Title>
      <Content>
        <Form>
          <SubTitle>Contact Information</SubTitle>
          <InputField
            name="E-mail"
            type={"email"}
            icon={"Mail"}
            placeholder={"Enter your email..."}
          />
          <InputField
            name="Phone"
            type={"tel"}
            icon={"Call"}
            placeholder={"Enter your phone..."}
          />

          <SubTitle>Shipping Address</SubTitle>
          <InputField
            name="Full name"
            type={"text"}
            icon={"account_circle"}
            placeholder={"Your name..."}
          />
          <InputField
            name="Address"
            type={"text"}
            icon={"home"}
            placeholder={"Your address..."}
          />
          <InputField
            name="City"
            type={"text"}
            icon={"location_city"}
            placeholder={"Your city..."}
          />
          <FormRow>
            <SelectInput
              name="Country"
              icon={"public"}
              placeholder={"Your country..."}
            />
            <InputField
              name="Postal Code"
              type={"text"}
              icon={"markunread_mailbox"}
              placeholder={"Your postal code..."}
            />
          </FormRow>
          <Ack msg="Save this information for next time" />

          <button type="submit">Continue</button>
        </Form>
        <Cart>
          {cart.map((item) => (
            <CartItem {...item}></CartItem>
          ))}
        </Cart>
      </Content>
    </StyledContainer>
  );
};

export default Checkout;
